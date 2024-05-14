import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/navigation/StackNavigator';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {useColorScheme} from 'react-native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export const ProductsApp = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? eva.dark : eva.light;

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </QueryClientProvider>
  );
};
