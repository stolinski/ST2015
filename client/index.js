import { createRouter, logger } from 'meteor/ssrwpo:ssr';
import Mainlayout from '/imports/ui/Layouts/MainLayout';


createRouter({
  MainLayout
})
.then(() => logger.info('Router started'));