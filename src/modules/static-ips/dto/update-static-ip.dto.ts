import { PartialType } from '@nestjs/mapped-types';
import { CreateStaticIpDto } from './create-static-ip.dto';

export class UpdateStaticIpDto extends PartialType(CreateStaticIpDto) {}
