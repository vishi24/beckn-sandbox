import { response } from "express";
import { Injectable } from "@nestjs/common";
import { ODRClientDTO } from "./dto/odr.dto";
import { ODRApiInterface } from "./odr-api.interface";
import * as CancelResponse from "./response/cancel.response.json";
import * as SearchResponse from "./response/search.response.json";
import * as SelectResponse from "./response/select.response.json";
import * as ConfirmResponse from "./response/confirm.response.json";
import * as RatingResponse from "./response/rating.response.json";
import * as SupportResponse from "./response/support.response.json";
import * as TrackResponse from "./response/track.response.json";
import * as InitConsentResponse from "./response/init-consent-form.response.json";
import * as InitDisputeResponse from "./response/init-dispute-details.response.json";
import * as InitRespondentResponse from "./response/init-respondent.response.json";
import * as StatusCompletedResponse from "./response/status-completed.response.json";
import * as StatusInProgressPaymentResponse from "./response/status-in-progress-payment-after-hearing.response.json";
import * as StatusInProgressResponse from "./response/status-in-progress.response.json";
import * as UpdateAgentResponse from "./response/update-agent.response.json";
import * as UpdateHearingDateResponse from "./response/update-hearing-date.response.json";

@Injectable()
export class ODRService implements ODRApiInterface {
    search = (odrRequest: ODRClientDTO) => {
        return SearchResponse;
    };
    select = (odrRequest: ODRClientDTO) => {
        return SelectResponse;
    };
    init = (odrRequest: ODRClientDTO) => {
        const { message } = odrRequest;
        const initConsent = message?.order?.tags?.find(tag => tag?.decriptor?.name === "consent-form");
        const initDispute = message?.order?.tags?.find(tag => tag?.descriptor?.name === "dispute-details");
        const initRespondent = message?.order?.tags?.find(tag => tag?.descriptor?.name === "respondent");

        if (initConsent) {
            return InitConsentResponse;
        }
        if (initDispute) {
            return InitDisputeResponse;
        }
        if (initRespondent) {
            return InitRespondentResponse;
        }
    };
    confirm = (odrRequest: ODRClientDTO) => {
        return ConfirmResponse;
    };
    status = (odrRequest: ODRClientDTO) => {
        const { context } = odrRequest;
        const statusCompleted = context?.key === "completed";
        const statusInProgressPayment = context?.key === "in-progress-payment-after-hearing";
        const statusInProgress = context?.key === "in-progress";

        if (statusCompleted) {
            return StatusCompletedResponse;
        }
        if (statusInProgressPayment) {
            return StatusInProgressPaymentResponse;
        }
        if (statusInProgress) {
            return StatusInProgressResponse;
        }
    };
    cancel = (odrRequest: ODRClientDTO) => {
        return CancelResponse;
    };
    support = (odrRequest: ODRClientDTO) => {
        return SupportResponse;
    };
    rating = (odrRequest: ODRClientDTO) => {
        return RatingResponse;
    };
    update = (odrRequest: ODRClientDTO) => {
        const { message } = odrRequest;
        const updateAgent = message?.order?.tags?.find(tag => tag?.decriptor?.name === "agent");
        const updateHearingDate = message?.order?.tags?.find(tag => tag?.decriptor?.name === "hearing-date");

        if (updateAgent) {
            return UpdateAgentResponse;
        }
        if (updateHearingDate) {
            return UpdateHearingDateResponse;
        }
    };
    track = (odrRequest: ODRClientDTO) => {
        return TrackResponse;
    };
}
