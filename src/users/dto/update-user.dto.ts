export class UpdateUserDto {
  readonly looking_for_a_job: boolean;
  readonly looking_for_a_job_description: string;
  readonly full_name: string;
  readonly contacts: UserContactsDto;
  readonly photos: UserPhotosDto;
}

class UserContactsDto {
  readonly github: string;
  readonly vk: string;
  readonly facebook: string;
  readonly instagram: string;
  readonly twitter: string;
  readonly website: string;
  readonly youtube: string;
  readonly main_link: string;
}

class UserPhotosDto {
  readonly small: string;
  readonly large: string;
}
