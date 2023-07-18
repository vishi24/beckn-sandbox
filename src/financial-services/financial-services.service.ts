import { DomainNotFoundException } from "src/common/exception/domain-notfound.exception";
import { CreditPersonalApiService } from "src/personal-credit/credit-personal-api.service";
import { CreditInvoiceApiService } from "src/invoice-based-credit/credit-invoice-api.service";

import { Injectable } from "@nestjs/common";

import { FinancialServicesApiInterface } from "./financial-services-api.interface";
import { FinancialServicesTypeEnum } from "./financial-services-type.enum";

@Injectable()
export class FinancialServicesService {
    get(domain: string): FinancialServicesApiInterface {
        switch (domain) {
            case FinancialServicesTypeEnum.CREDITPERSONAL:
                return new CreditPersonalApiService();
            case FinancialServicesTypeEnum.CREDITINVOICE:
                return new CreditInvoiceApiService();
            default:
                throw new DomainNotFoundException();
        }
    }
}
