import React from 'react';
import { registerRootComponent } from 'expo';

import { Home } from './screens/Home';

export default function App() {
  return <Home />
}

registerRootComponent(App);