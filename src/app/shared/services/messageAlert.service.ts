import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
    providedIn: 'root',
})

export class MessageAlertService{

    constructor(private messageService: MessageService){}

    showMesages(severity: string, summary: string, detail?: string, life?: number, closable?: boolean){
        this.messageService.add({
            severity: severity,
            summary: summary,
            detail: detail,
            life: life,
            closable: closable,
        })
    }

}