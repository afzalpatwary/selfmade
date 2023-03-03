import React, { useState } from 'react';
// import EyeInvisible from '../../assets/img/EyeInvisible.svg';
import EyeVisible from '../../assets/img/eyevisible.svg';

const PassWordToggle = () => {

    const [visible, setVisible] = useState(false);

    const Icon = (

        <EyeVisible
            icon={visible ? "EyeInvisible" : "EyeVisible"}
            onClick={() => setVisible(visibility => !visibility)}
        />
    )

    const InputType = visible  ? "text" : "password";

    return (
        [Icon, InputType]
    );
};

export default PassWordToggle;