import React from 'react'
import { render } from 'react-dom'
import { App } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from './Shared/Layout';

InertiaProgress.init();

const el = document.getElementById('app')

const resolveComponent = component => import(`./Pages/${component}`).then(meta => meta.default);

render(
  	<App
    	initialPage={JSON.parse(el.dataset.page)}
    	resolveComponent={resolveComponent}
  	/>,
  el
);