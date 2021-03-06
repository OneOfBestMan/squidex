/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PublicUserDto, UsersService } from './users.service';

import { AuthService } from './auth.service';

@Injectable()
export class UsersProviderService {
    private readonly caches: { [id: string]: Observable<PublicUserDto> } = {};

    constructor(
        private readonly usersService: UsersService,
        private readonly authService: AuthService
    ) {
    }

    public getUser(id: string, me: string | null = 'Me'): Observable<PublicUserDto> {
        let result = this.caches[id];

        if (!result) {
            const request =
                this.usersService.getUser(id)
                    .catch(error => {
                        return Observable.of(new PublicUserDto('Unknown', 'Unknown'));
                    })
                    .publishLast();

            request.connect();

            result = this.caches[id] = request;
        }

        return result
            .map(dto => {
                if (me && this.authService.user && dto.id === this.authService.user.id) {
                    dto = new PublicUserDto(dto.id, me);
                }
                return dto;
            }).share();
    }
}