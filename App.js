import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Question = ({ imageUri, questionText, selectedValue, onValueChange, option1, option2, option3 }) => {
    return (
        <View style={{ marginVertical: 20, alignItems: 'center' }}>
            <Text>{questionText}</Text>
            <Image source={{ uri: imageUri }} style={{ width: 300, height: 200, marginVertical: 10 }} />
            <Picker selectedValue={selectedValue} onValueChange={onValueChange} style={{ width: 400 }}>
                <Picker.Item label={option1} value={option1} />
                <Picker.Item label={option2} value={option2} />
                <Picker.Item label={option3} value={option3} />
            </Picker>
        </View>
    );
};

const QuizApp = () => {
    const [ans1, setAns1] = useState('Mouse');
    const [ans2, setAns2] = useState('Mammoth');
    const [ans3, setAns3] = useState('Dog');

    const submitQuiz = () => {
        let score = 0;
        if (ans1 === 'Cat') score++;
        if (ans2 === 'Elephant') score++;
        if (ans3 === 'Dog') score++;

        Alert.alert('Quiz Result', 'You got ' + score + ' out of 3 correct!');
    };

    return (
        <ScrollView contentContainerStyle={{ padding: 10, paddingTop: 30 }}>
            <Text style={{ fontSize: 48, fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center', marginBottom: 20 }}>
                Animal Quiz
            </Text>

            <Question
                imageUri="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800"
                questionText="1. What Animal is this?"
                selectedValue={ans1}
                onValueChange={setAns1}
                option1="Mouse"
                option2="Cat"
                option3="Seal"
            />

            <Question
                imageUri="https://cdn.pixabay.com/photo/2018/01/24/22/23/elephant-3104919_1280.jpg"
                questionText="2. What Animal is this?"
                selectedValue={ans2}
                onValueChange={setAns2}
                option1="Mammoth"
                option2="Whale"
                option3="Elephant"
            />

            <Question
                imageUri="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800"
                questionText="3. What Animal is this?"
                selectedValue={ans3}
                onValueChange={setAns3}
                option1="Dog"
                option2="Lion"
                option3="Tiger"
            />

            <TouchableOpacity onPress={submitQuiz} style={{ padding: 15, backgroundColor: '#ccc', marginTop: 20 }}>
                <Text style={{ textAlign: 'center' }}>Submit Answers</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default QuizApp;
