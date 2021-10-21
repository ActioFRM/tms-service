/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-empty-interface */
import { GrpHdr } from './GrpHdr';
import { PmtInf } from './PmtInf';
import { SplmtryData } from './SplmtryData';

class CstmrCdtTrfInitn {
  MsgId = '';
  GrpHdr: GrpHdr = new GrpHdr();
  PmtInf: PmtInf = new PmtInf();
  SplmtryData: SplmtryData = new SplmtryData();
}

export class CPain001Message {
  TxTp = '';
  CstmrCdtTrfInitn: CstmrCdtTrfInitn = new CstmrCdtTrfInitn();

  constructor(request: any) {
    if (request.TxTP !== 'pain.001.001.11') {
      throw Error('Error on ISO20022 Pain001 message format');
    }
  }
}

export interface IPain001Message extends CPain001Message {}
