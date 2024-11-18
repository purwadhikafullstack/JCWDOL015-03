export interface IAddress {
    id: number,
    userId: number,
    addressLine: string,
    city: string,
    state: string,
    postalCode: string,
    latitude: number,
    longitude: number,
    isPrimary: boolean
}

export interface ILocation {
    lat: number;
    lng: number;
    addressLine: string;
    state: string;
    postalCode: string;
}

export interface AddressCardProps {
    address: {
        label: string;
        recipient: string;
        phoneNumber: string;
        addressLine: string;
        city: string;
        state: string;
        postalCode: string;
        latitude: number;
        longitude: number;
        isPrimary: boolean;
    };
    onSelect: () => void;
  };

  export interface IFetchCity {
    id: number;
    name: string;
  }

  export interface ICreateAddress {
    label: string;
    recipient: string;
    phoneNumber: string
    cityId: number;
    state: string;
    addressLine: string;
    postalCode: string;
    latitude: number;
    longitude: number;
    isPrimary: boolean;
  }

  export interface CitySearchInputProps {
    handleSelect: (id: number, name: string) => void;
    resetTrigger?: boolean;
  }