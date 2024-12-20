import { ICreateAddress, ILocation } from "@/type/address"
import { Button, Input } from "@nextui-org/react"
import { GoogleMap, Marker, StandaloneSearchBox, useJsApiLoader } from "@react-google-maps/api"
import { FormikProps } from "formik"
import { useCallback, useEffect, useRef, useState } from "react"

interface GoogleMapPickerProps {
    onConfirm: (location: ILocation) => void
}

const containerStyle = {
    width: '100%',
    height: '400px',
    
}

const center = {
    lat: -6.200000,
    lng: 106.816666
}

export const GoogleMapPicker: React.FC<GoogleMapPickerProps> = ({onConfirm}) => {
    const [marker, setMarker] = useState(center)
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        libraries: ['places'], language: 'id'
    })

    const inputRef = useRef<HTMLInputElement | null>(null)
    const [autoComplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null)

    useEffect(() => {
        if (isLoaded && inputRef.current) {
            const autocompleteInstance = new google.maps.places.Autocomplete(inputRef.current)
            autocompleteInstance.addListener("place_changed", () => {
                const place = autocompleteInstance.getPlace()
                if (place.geometry && place.geometry.location) {
                    const latLng = place.geometry.location
                    const lat = latLng?.lat()
                    const lng = latLng?.lng()
                    setMarker({ lat, lng })
                }
            })

            setAutocomplete(autocompleteInstance)
        }
    }, [isLoaded])

    const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
        if (event.latLng) {
            setMarker({
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            })
        }
    }, [])
    const handleConfirm = async () => {
        const geocoder = new google.maps.Geocoder()

        try {
            const response = await geocoder.geocode({ location: marker, language: 'id' });
            const results: google.maps.GeocoderResult[] = response.results
            if (results && results.length > 0) {
                const fullAddress = results[0]?.formatted_address || '';
                const state = results[0]?.address_components.find((component) =>
                    component.types.includes('administrative_area_level_1')
                )?.long_name;
                const postalCode = results[0]?.address_components.find((component) =>
                    component.types.includes('postal_code')
                )?.long_name;

    
                onConfirm({
                    lat: marker.lat,
                    lng: marker.lng,
                    addressLine: fullAddress || '',
                    state: state || '',
                    postalCode: postalCode || '',
                })
            } else {
                console.error('No results found')
            }
        } catch (error) {
            console.error("Geocoding failed: ", error)
        }
    }
    if(!isLoaded) return <p>Loading map...</p>
    return (
        <div className="flex flex-col gap-3">
            <div className="relative mb-1">
                <Input ref={inputRef} type="text" placeholder="Cari alamat..." className=" top-0 left-0 w-full" />
                
            </div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={marker}
                zoom={14}
                onClick={onMapClick}
            >
                <Marker position={marker} />
            </GoogleMap>
            <Button color="primary" onClick={handleConfirm}>Simpan Lokasi</Button>
        </div>
    )
}