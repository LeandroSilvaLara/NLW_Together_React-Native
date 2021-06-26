import React from "react";  
import { View } from "react-native";

import { CategorySelect } from "../../components/categorySelect";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/profile";

import { styles } from "./styles";

export function Home() {
    return (
        <View>
            <View style={styles.header}>
                <View>
                    <CategorySelect/>

                </View>
            </View>
        </View>
    );
}