import { InjectionToken } from "@angular/core";

// Token that is utitlized when pulling the local storage capabilities
// into other components within our application
export const BROWSER_STORAGE = new
    InjectionToken<Storage>('Browser Storage', {
        providedIn: 'root',
        factory: () => localStorage
    });

export class Storage {
}
