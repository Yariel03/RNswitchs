import React from 'react'
import { View, Text, Switch } from 'react-native'
import { useSwitch } from './hook/useSwitch';
import { styles, colores } from './style'


export const Switchs = () => {

    const { roles, toggleSwitch } = useSwitch();


    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>

            <View >
                {roles.map((item, index) => (
                    <View key={index} style={styles.containerSwitch} >
                        <Text>{item.name}</Text>
                        <Switch
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginLeft: 150 }}
                            trackColor={{ false: colores.disabled, true: colores.primary }}
                            thumbColor={item.active ? colores.secondary : colores.secondary}
                            onValueChange={() => toggleSwitch(index)}
                            value={item.active}
                        />
                    </View>
                ))}
            </View>
        </View>
    )
}



