import { PartialType } from '@nestjs/mapped-types';
import { CreateCreateProfileDto } from './create-create-profile.dto';

export class UpdateCreateProfileDto extends PartialType(CreateCreateProfileDto) {}
