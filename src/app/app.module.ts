import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MonthlyFeesPaymentComponent } from './monthly-fees-payment/monthly-fees-payment.component';
import { AnnualFeesPaymenttComponent } from './annual-fees-paymentt/annual-fees-paymentt.component';
import { OtherFeesPaymentComponent } from './other-fees-payment/other-fees-payment.component';
import { DocumentsComponent } from './documents/documents.component';
import { BankStatementComponent } from './bank-statement/bank-statement.component';
import { SalesInvoiceComponent } from './sales-invoice/sales-invoice.component';
import { PurchaseInvoiceComponent } from './purchase-invoice/purchase-invoice.component';
import { DocOutstandingLoanComponent } from './doc-outstanding-loan/doc-outstanding-loan.component';
import { PayInSlipsComponent } from './pay-in-slips/pay-in-slips.component';
import { TaxesComponent } from './taxes/taxes.component';
import { ChequebookRecordsComponent } from './chequebook-records/chequebook-records.component';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CustomerKYCComponent } from './customer-kyc/customer-kyc.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { TaxPaymentComponent } from './tax-payment/tax-payment.component';
import { GoodsAndServiceTaxComponent } from './goods-and-service-tax/goods-and-service-tax.component';
import { FixedDeositComponent } from './fixed-deosit./fixed-deosit..component';
import { MutualFundComponent } from './mutual-fund/mutual-fund.component';
import { PayGstComponent } from './pay-gst/pay-gst.component';
import { GstinReportComponent } from './gstin-report/gstin-report.component';
import { DirectTaxComponent } from './direct-tax/direct-tax.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { GSTNBulkUploadComponent } from './gstnbulk-upload/gstnbulk-upload.component';
import { StateTaxComponent } from './state-tax/state-tax.component';
import { LiveAccountComponent } from './live-account/live-account.component';
import { OutstandingLoanComponent } from './outstanding-loan/outstanding-loan.component';
import { PeriodicStatementComponent } from './periodic-statement/periodic-statement.component';
import { EStatementComponent } from './estatement/estatement.component';
import { RegistreForStatementComponent } from './registre-for-statement/registre-for-statement.component';
import { GstStatementComponent } from './gst-statement/gst-statement.component';
import { InsuranceComponent } from './insurance/insurance.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MonthlyFeesPaymentComponent,
    AnnualFeesPaymenttComponent,
    OtherFeesPaymentComponent,
    DocumentsComponent,
    BankStatementComponent,
    SalesInvoiceComponent,
    PurchaseInvoiceComponent,
    DocOutstandingLoanComponent,
    PayInSlipsComponent,
    TaxesComponent,
    ChequebookRecordsComponent,
    InvestmentDetailsComponent,
    VehiclesComponent,
    CustomerKYCComponent,
    ExpenseDetailsComponent,
    TaxPaymentComponent,
    GoodsAndServiceTaxComponent,
    FixedDeositComponent,
    MutualFundComponent,
    PayGstComponent,
    GstinReportComponent,
    DirectTaxComponent,
    AcknowledgementComponent,
    GSTNBulkUploadComponent,
    StateTaxComponent,
    LiveAccountComponent,
    OutstandingLoanComponent,
    PeriodicStatementComponent,
    EStatementComponent,
    RegistreForStatementComponent,
    GstStatementComponent,
    InsuranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
