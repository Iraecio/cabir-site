import {Injectable} from '@angular/core';
import { title } from 'process';
import {BehaviorSubject} from 'rxjs';

// Menu
export interface Menu {
    path?: string;
    title?: string;
    type?: string;
    icon?: string;
    badgeType?: string;
    badgeValue?: string;
    active?: boolean;
    megaMenu?: boolean;
    megaMenuType?: string; // small, medium, large
    bookmark?: boolean;
    children?: Menu[];
}

@Injectable({
    providedIn: 'root'
})
export class NavService {

    constructor() {
    }

    MENUITEMS: Menu[] = [
        {path: '/', title: 'Home', type: 'extTabLink'},
        {path: '/', title: 'Acessar Painel', type: 'extTabLink'},
        {path: '/', title: 'Cadastrar', type: 'extTabLink'},
        {path: '/', title: 'Planos', type: 'extTabLink'},
        {path: '/', title: 'Vantagens', type: 'extTabLink'},
        {path: '/', title: 'Nossas Vozes', type: 'extTabLink'},
        {path: '/', title: 'Contato', type: 'extTabLink'},
    ]

    // Array
    items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
