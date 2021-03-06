/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldDto } from '@app/shared';

@Component({
    selector: 'sqx-field-form-common',
    styleUrls: ['field-form-common.component.scss'],
    templateUrl: 'field-form-common.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldFormCommonComponent {
    @Input()
    public editForm: FormGroup;

    @Input()
    public editFormSubmitted = false;

    @Input()
    public showName = true;

    @Input()
    public field: FieldDto;
}