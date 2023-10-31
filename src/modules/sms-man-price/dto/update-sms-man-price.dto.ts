import { PartialType } from '@nestjs/mapped-types';
import { CreateSmsManPriceDto } from './create-sms-man-price.dto';

export class UpdateSmsManPriceDto extends PartialType(CreateSmsManPriceDto) {}
