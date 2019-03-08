import * as moment from 'moment';

export const newComputerDetails = {
    name: 'Sarthak',
    introducedDate: moment().format('YYYY-MM-DD'),
    discontinuedDate: moment().format('YYYY-MM-DD'),
    company: 'Apple'
};
export const updatedComputerDetails = {
    name: 'Sarthak1',
    introducedDate: moment().format('YYYY-MM-DD'),
    discontinuedDate: '',
    company: 'Netronics'
};
