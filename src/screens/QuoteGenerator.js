
import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const QuoteGenerator = () => {

  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  const api_url = "https://zenquotes.io/api/quotes/";

  async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    let quote = data[0].q
    let author = data[0].a
    console.log(data);
    setQuote(quote)
    setAuthor(author)
  }
  useEffect(() => {
    getapi(api_url)
  }, [])


  return (
    <View>
      <Text>{quote}</Text>
      <Text>{author}</Text>
    </View>
  )
}

export default QuoteGenerator

const styles = StyleSheet.create({

})

