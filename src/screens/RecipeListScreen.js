import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchFilter from '../components/SearchFilter'
import CategoriesFilter from '../components/CategoriesFilter'
import RecipeCard from '../components/RecipeCard'

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{flex: 1,marginHorizontal:16}}>
      {/*render header */}
      <Header headerText={"Hi, Eugene"} headerIcon={"bell-o"}/>
   
    {/*Search Filter */}
  <SearchFilter icon="search" placeholder={"enter your fav recipe"}/>
       
       {/*Categories Filter */}
       <View style={{marginTop:22,}}>
        <Text style={{fontSize:22, fontWeight:"bold"
        }}>Categories</Text>
 {/*Categories list */}
 <CategoriesFilter/>
       </View>

 {/*Recipe list Filter */}
       <View style={{marginTop:22,flex:1,}}>
        <Text style={{fontSize:22, fontWeight:"bold"
        }}>Recipes</Text>
 {/*Recipe list */}
<RecipeCard/>
       </View>
    </SafeAreaView>
  )
}

export default RecipeListScreen

const styles = StyleSheet.create({})