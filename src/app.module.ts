
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClsModule } from 'nestjs-cls';

import { DataSource } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';

import { AuthModule } from './modules/auth/auth.module.ts';
import { HealthCheckerModule } from './modules/health-checker/health-checker.module.ts';
import { PostModule } from './modules/post/post.module.ts';
import { UserModule } from './modules/user/user.module.ts';
import { ApiConfigService } from './shared/services/api-config.service.ts';
import { SharedModule } from './shared/shared.module.ts';
import { TestModule } from './modules/test/test.module.ts';
import { FormTemplateModule } from './modules/form-template/form-template.module.ts';
import { FormSectionModule } from './modules/form-section/form-section.module.ts';
import { FormFieldModule } from './modules/form-field/form-field.module.ts';
import { FormFieldConditionModule } from './modules/form-field-condition/form-field-condition.module.ts';
import { FormResponseModule } from './modules/form-response/form-response.module.ts';
import { FormResponseAnswerModule } from './modules/form-response-answer/form-response-answer.module.ts';
import { FormRepetableGroupEntity } from './modules/form-repetable-group/form-repetable-group.entity.ts';
import { FormResponseRepetableGroupEntity } from './modules/form-response-repetable-group/form-response-repetable-group.entity.ts';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PostModule,
    TestModule,
    FormTemplateModule,
    FormSectionModule,
    FormFieldModule,
    FormFieldConditionModule,
    FormResponseModule,
    FormResponseAnswerModule,
    FormRepetableGroupEntity,
    FormResponseRepetableGroupEntity,
    ClsModule.forRoot({
      global: true,
      middleware: {
        mount: true,
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (configService: ApiConfigService) =>
        configService.postgresConfig,
      inject: [ApiConfigService],
      dataSourceFactory: (options) => {
        if (!options) {
          throw new Error('Invalid options passed');
        }

        return Promise.resolve(
          addTransactionalDataSource(new DataSource(options)),
        );
      },
    }),
    HealthCheckerModule,
  ],
  providers: [],
})
export class AppModule { }
