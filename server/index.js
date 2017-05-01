import { createRouter, logger } from 'meteor/ssrwpo:ssr';
import MainLayout from '/imports/ui/Layouts/MainLayout';

console.log(MainLayout);

createRouter({MainLayout});
logger.info('Router started');