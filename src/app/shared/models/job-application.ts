import { detail } from './detail.model';
import { StatusHistory } from './status-history.model';
export interface JobApplication{
    details:detail[],
    statusHistory:StatusHistory[],
}