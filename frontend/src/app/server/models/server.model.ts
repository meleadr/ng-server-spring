import {Status} from "../enums/status.enum";

export class Server {
  id!: number;
  ipAddress!: string;
  name!: string;
  memory!: string;
  type!: string;
  imageUrl!: string;
  status!: Status;
}
