import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Appearance, StyleSheet } from 'react-native';

export default function CustomDrawerContent(props: any) {
    const colorScheme = useColorScheme();

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem 
                label={'Dark mode'} 
                onPress={() => Appearance.setColorScheme(colorScheme==='dark' ? 'light' : 'dark')} 
                icon={({ size, color }) => (
                    <Ionicons name='moon-outline' size={size} color={color}/>
                )}
                style={{ marginTop: 'auto' }}
            />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    themeWrapper: {
        marginTop: 'auto',
        paddingLeft: 10,
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
})