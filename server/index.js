import { createRouter, logger } from 'meteor/ssrwpo:ssr';
import {MainLayout} from '/imports/ui/Layouts/MainLayout';

createRouter({ 
  MainApp: MainLayout
});
logger.info('Router started');
