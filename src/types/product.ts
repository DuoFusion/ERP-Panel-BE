import { Schema } from "mongoose";
import { IBase } from "./base";

export interface IProduct extends IBase {
    itemCode: string;
    barcode?: string;
    name: string;
    printName?: string;
    slug: string;
    autoGenerateItemCode?: boolean;

    // Classification
    categoryId: Schema.Types.ObjectId;
    subCategoryId?: Schema.Types.ObjectId;
    brandId?: Schema.Types.ObjectId;
    subBrandId?: Schema.Types.ObjectId;
    departmentId?: Schema.Types.ObjectId;

    // Type
    productType: 'finished' | 'raw_material' | 'semi_finished' | 'service' | 'non_inventory';

    // Units & Pricing
    uomId: Schema.Types.ObjectId;
    netWeightUnit?: string;
    masterQty?: number; // For B2B
    minimumQty?: number;
    
    // Pricing Details
    mrp: number;
    sellingPrice: number;
    sellingDiscount?: number;
    sellingMargin?: number;
    purchasePrice?: number;
    landingCost?: number;
    retailerDiscount?: number;
    retailerPrice?: number;
    retailerMargin?: number;
    wholesalerDiscount?: number;
    wholesalerPrice?: number;
    wholesalerMargin?: number;
    onlinePrice?: number;
    openingQty?: number;

    // Tax
    hsnCode?: string;
    purchaseTaxId?: Schema.Types.ObjectId;
    salesTaxId?: Schema.Types.ObjectId;
    isPurchaseTaxInclusive: boolean;
    isSalesTaxInclusive: boolean;
    cessPercentage?: number;

    // Inventory Control
    manageBatch: boolean;
    hasExpiry: boolean;
    expiryDays?: number;
    expiryType?: 'MFG' | 'EXP';
    mfgDate?: Date;
    isExpiryProductSaleable?: boolean;

    // Details
    description?: string;
    shortDescription?: string;
    netWeight?: number;
    nutritionInfo?: string;
    ingredients?: string;
    image?: string;
    images?: string[]; // Multiple images
    additionalInfo?: string;

    status: 'active' | 'inactive';
}
