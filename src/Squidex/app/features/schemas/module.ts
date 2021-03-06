/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DndModule } from 'ng2-dnd';

import {
    SchemaMustExistGuard,
    SqxFrameworkModule,
    SqxSharedModule
} from '@app/shared';

import {
    AssetsUIComponent,
    AssetsValidationComponent,
    BooleanUIComponent,
    BooleanValidationComponent,
    DateTimeUIComponent,
    DateTimeValidationComponent,
    FieldComponent,
    FieldFormCommonComponent,
    FieldFormUIComponent,
    FieldFormValidationComponent,
    FieldWizardComponent,
    GeolocationUIComponent,
    GeolocationValidationComponent,
    JsonUIComponent,
    JsonValidationComponent,
    NumberUIComponent,
    NumberValidationComponent,
    ReferencesUIComponent,
    ReferencesValidationComponent,
    SchemaEditFormComponent,
    SchemaFormComponent,
    SchemaPageComponent,
    SchemaScriptsFormComponent,
    SchemasPageComponent,
    StringUIComponent,
    StringValidationComponent,
    TagsUIComponent,
    TagsValidationComponent
} from './declarations';

const routes: Routes = [
    {
        path: '',
        component: SchemasPageComponent,
        children: [
            {
                path: ':schemaName',
                component: SchemaPageComponent,
                canActivate: [SchemaMustExistGuard]
            }]
    }
];

@NgModule({
    imports: [
        SqxFrameworkModule,
        SqxSharedModule,
        DndModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        SchemaMustExistGuard
    ],
    declarations: [
        FieldComponent,
        AssetsUIComponent,
        AssetsValidationComponent,
        BooleanUIComponent,
        BooleanValidationComponent,
        DateTimeUIComponent,
        DateTimeValidationComponent,
        FieldFormCommonComponent,
        FieldFormUIComponent,
        FieldFormValidationComponent,
        FieldWizardComponent,
        GeolocationUIComponent,
        GeolocationValidationComponent,
        JsonUIComponent,
        JsonValidationComponent,
        NumberUIComponent,
        NumberValidationComponent,
        ReferencesUIComponent,
        ReferencesValidationComponent,
        SchemaEditFormComponent,
        SchemaFormComponent,
        SchemaPageComponent,
        SchemaScriptsFormComponent,
        SchemasPageComponent,
        StringUIComponent,
        StringValidationComponent,
        TagsUIComponent,
        TagsValidationComponent
    ]
})
export class SqxFeatureSchemasModule { }