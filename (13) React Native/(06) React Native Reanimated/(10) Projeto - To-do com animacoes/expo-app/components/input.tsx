import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
    onAdd: (taskText: string) => void;
}

export const Input = ({ onAdd }: Props) => {
    const [taskText, setTaskText] = useState('');

    const handleButton = () => {
        if (taskText.trim().length > 2) {
            onAdd(taskText);
            setTaskText('');
        }
    }

    return (
        <View style={styles.area}>
            <TextInput
                style={styles.input}
                value={taskText}
                onChangeText={t => setTaskText(t)}
                placeholder="Digite uma tarefa..."
            />
            <Pressable onPress={handleButton} style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    area: {
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        padding: 20,
        margin: 10,
        borderRadius: 10,
        fontSize: 18,
        color: '#000000',
        backgroundColor: '#CCCCCC'
    },
    button: {
        padding: 20,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#CCCCCC'
    },
    buttonText: {
        fontSize: 18,
        color: '#000000'
    }
});