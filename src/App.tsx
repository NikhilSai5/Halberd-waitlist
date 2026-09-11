import { Route, Switch } from 'wouter';
import { MotionConfig } from 'framer-motion';
import Home from '@/pages/Home';
import NotFound from '@/pages/not-found';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </MotionConfig>
  );
}
