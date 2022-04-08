import React, { useState, useEffect } from 'react'

import { IRoles } from './../interfaces/Iroles'

const roles: IRoles[] = [{
    name: 'Admin1',
    active: false
}, {
    name: 'User',
    active: false
}, {
    name: 'User',
    active: false
}, {
    name: 'Guest',
    active: false
}];


export const useSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(roles);

    const toggleSwitch = async (index: number) => {
        // change value switch
        const newRoles = await roles.map((role, i) => {
            (i === index) ? role.active = !role.active : role.active = false
            return role;
        });
        setIsEnabled(newRoles);
    };

    const seleccion = () => {
        let seleccionado = roles.filter(role => role.active === true);
        if (seleccionado.length < 1) {
            alert('No seleccionaste ninguna rol');
            return 'No seleccionado';
        } else {
            alert(`seleccionaste ${seleccionado.map(role => role.name)}`);
            return seleccionado[0].name;
        }

    }

    return (
        { roles, isEnabled, toggleSwitch, seleccion }
    )
}
