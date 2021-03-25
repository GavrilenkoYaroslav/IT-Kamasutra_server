import { UpdateUserDto } from './update-user.dto';

export class GetUserDto {
  id: number;
  looking_for_a_job: boolean;
  looking_for_a_job_description: string;
  full_name: string;
  contacts: UpdateUserDto['contacts'];
  photos: UpdateUserDto['photos'];
}
