
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  googleId: 'googleId',
  password: 'password',
  role: 'role',
  referralCode: 'referralCode',
  referredById: 'referredById',
  avatarUrl: 'avatarUrl',
  isVerified: 'isVerified',
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  storeId: 'storeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StoreScalarFieldEnum = {
  id: 'id',
  name: 'name',
  location: 'location',
  latitude: 'latitude',
  longitude: 'longitude',
  cityId: 'cityId'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  price: 'price',
  imageUrl: 'imageUrl',
  isRecommended: 'isRecommended',
  slug: 'slug',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.DiscountScalarFieldEnum = {
  id: 'id',
  discountType: 'discountType',
  value: 'value',
  minPurchase: 'minPurchase',
  productId: 'productId',
  storeId: 'storeId',
  giverId: 'giverId',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ShippingOptionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  baseCost: 'baseCost',
  additionalCost: 'additionalCost',
  maxDistance: 'maxDistance'
};

exports.Prisma.StockScalarFieldEnum = {
  id: 'id',
  quantity: 'quantity',
  storeId: 'storeId',
  productId: 'productId',
  isDeleted: 'isDeleted'
};

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  label: 'label',
  recipient: 'recipient',
  phoneNumber: 'phoneNumber',
  addressLine: 'addressLine',
  cityId: 'cityId',
  state: 'state',
  postalCode: 'postalCode',
  latitude: 'latitude',
  longitude: 'longitude',
  isPrimary: 'isPrimary'
};

exports.Prisma.StockHistoryScalarFieldEnum = {
  id: 'id',
  changeType: 'changeType',
  quantity: 'quantity',
  createdAt: 'createdAt',
  stockId: 'stockId'
};

exports.Prisma.SalesReportScalarFieldEnum = {
  id: 'id',
  storeId: 'storeId',
  totalSales: 'totalSales',
  month: 'month',
  year: 'year'
};

exports.Prisma.StockReportScalarFieldEnum = {
  id: 'id',
  storeId: 'storeId',
  productId: 'productId',
  totalAdded: 'totalAdded',
  totalRemoved: 'totalRemoved',
  finalStock: 'finalStock',
  month: 'month',
  year: 'year'
};

exports.Prisma.CartScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CartItemScalarFieldEnum = {
  id: 'id',
  cartId: 'cartId',
  productId: 'productId',
  quantity: 'quantity',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  checkoutId: 'checkoutId'
};

exports.Prisma.CheckoutScalarFieldEnum = {
  id: 'id',
  userId: 'userId'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  shippingOptionId: 'shippingOptionId',
  status: 'status',
  totalAmount: 'totalAmount',
  paymentProofUrl: 'paymentProofUrl',
  shippedAt: 'shippedAt',
  shippingCost: 'shippingCost',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  addressId: 'addressId',
  storeId: 'storeId',
  discountId: 'discountId',
  discountAmount: 'discountAmount'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  productId: 'productId',
  quantity: 'quantity',
  price: 'price',
  discountValue: 'discountValue'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  amountPaid: 'amountPaid',
  paymentMethod: 'paymentMethod',
  expiredDate: 'expiredDate',
  token: 'token',
  isConfirmed: 'isConfirmed',
  confirmedAt: 'confirmedAt'
};

exports.Prisma.CityScalarFieldEnum = {
  id: 'id',
  name: 'name',
  provinceId: 'provinceId'
};

exports.Prisma.ProvinceScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserRole = exports.$Enums.UserRole = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  STORE_ADMIN: 'STORE_ADMIN',
  USER: 'USER'
};

exports.DiscountType = exports.$Enums.DiscountType = {
  FLAT: 'FLAT',
  PERCENTAGE: 'PERCENTAGE',
  BUY_ONE_GET_ONE: 'BUY_ONE_GET_ONE',
  REFERRAL_GIVER: 'REFERRAL_GIVER',
  REFERRAL_USER: 'REFERRAL_USER'
};

exports.ChangeType = exports.$Enums.ChangeType = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  DELETED: 'DELETED'
};

exports.OrderStatus = exports.$Enums.OrderStatus = {
  PendingPayment: 'PendingPayment',
  Waiting: 'Waiting',
  Confirmed: 'Confirmed',
  Proccessed: 'Proccessed',
  Shipped: 'Shipped',
  Completed: 'Completed',
  Cancelled: 'Cancelled'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  Transfer: 'Transfer',
  CreditCard: 'CreditCard',
  Gateway: 'Gateway'
};

exports.Prisma.ModelName = {
  User: 'User',
  Store: 'Store',
  Product: 'Product',
  ProductCategory: 'ProductCategory',
  Discount: 'Discount',
  ShippingOption: 'ShippingOption',
  Stock: 'Stock',
  Address: 'Address',
  StockHistory: 'StockHistory',
  SalesReport: 'SalesReport',
  StockReport: 'StockReport',
  Cart: 'Cart',
  CartItem: 'CartItem',
  Checkout: 'Checkout',
  Order: 'Order',
  OrderItem: 'OrderItem',
  Payment: 'Payment',
  City: 'City',
  Province: 'Province'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
