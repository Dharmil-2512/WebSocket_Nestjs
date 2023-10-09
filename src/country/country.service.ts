import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CountryService {
  getCountryList(): any {
    return fs.readFileSync(
      path.join(__dirname, '../../countries.json'),
      'utf-8',
    );
  }
}
