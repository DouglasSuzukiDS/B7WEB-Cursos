import { useState } from "react";
import { ScrollView } from "react-native";
import { Item } from "../components/item";
import { Input } from "../components/input";
import { Task } from "../types/task";

export default function Screen() {
    const [list, setList] = useState<Task[]>([]);

    const handleAdd = (newTask: string) => {
        setList([...list, { label: newTask, done: false }]);
    }

    const handleDelete = (taskName: string) => {
        const index = list.findIndex(item => item.label === taskName);
        if (index > -1) {
            const listClone = [...list];
            listClone.splice(index, 1);
            setList(listClone);
        }
    }

    const handleDoneUpdate = (taskName: string) => {
        const index = list.findIndex(item => item.label === taskName);
        if (index > -1) {
            const listClone = [...list];
            listClone[index].done = !listClone[index].done;
            setList(listClone);
        }
    }

    return (
        <ScrollView>
            <Input onAdd={handleAdd} />

            {list.map((item, index) => (
                <Item
                    key={index}
                    task={item}
                    onDelete={handleDelete}
                    onDoneUpdate={handleDoneUpdate}
                />
            ))}
        </ScrollView>
    );
}