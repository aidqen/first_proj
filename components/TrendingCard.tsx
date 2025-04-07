import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

interface TrendingCardProps {
    movie: {
        movie_id: string;
        title: string;
        poster_url: string;
    };
    index: number;
}

const TrendingCard = ({ movie: { movie_id, title, poster_url }, index }: TrendingCardProps) => {
    return (
        <Link href={`/movies/${movie_id}`} asChild>
            <TouchableOpacity className='w-32 relative pl-5'>
                <Image
                    source={{ uri: poster_url }}
                    className='w-32 h-48 rounded-lg'
                    resizeMode='cover'
                />
                <View className='absolute bottom-9 -left-3 px-2 py-1 rounded-full'>
                    <Text className='text-white font-bold text-6xl'>{index + 1}</Text>
                </View>
                <Text numberOfLines={1} className='text-sm font-bold mt-2 text-light-200'>
                    {title}
                </Text>
            </TouchableOpacity>
        </Link>
    )
}

export default TrendingCard