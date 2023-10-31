import { PartialType } from '@nestjs/mapped-types';
import { CreateSmsManDto } from './create-sms-man.dto';

export class UpdateSmsManDto extends PartialType(CreateSmsManDto) {}
