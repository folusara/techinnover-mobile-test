import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../screens/screen.types.ts';
import ScreenEnums from '../src/enums/screen-enums.js';
import LandingScreen from '../screens/landing';
import BottomTabNavigation from './bottom-tabs.js';
import AuthStackNavigator from './auth-stack.js';
import OnboardingStackNavigator from './onboarding-stack.js';
import RootStackNavigator from './root-stack/index.js';
import CurratedStackNavigator from './curratedTextStack/index.js';
import BookSession from '../screens/therapy/bookSession.tsx';
import ExploreOptions from '../screens/explore/exploreOptions.tsx';
import ExploreDetail from '../screens/explore/exploreDetail.tsx';
import JournalStack from './journalStack/index.js';
import ListOptions from '../screens/explore/listTypes.tsx';
import SelectedOption from '../screens/explore/selectedOption.tsx';
import TurnChoice from '../screens/explore/turnChoice.tsx';
import PickedChoice from '../screens/explore/pickedChoice.tsx';
import QuizziesIntro from '../screens/explore/quizziesIntro.tsx';
import QuizziesQuestions from '../screens/explore/quizziesQuestions.tsx';
import QuizziesResult from '../screens/explore/quizziesResult.tsx';
import SparkUniversity from '../screens/explore/spark-university/index.tsx';
import Questions from '../screens/explore/questions/home.tsx';
import QuestionsSubHome from '../screens/explore/questions/subHome.tsx';
import Communications from '../screens/explore/questions/communication.tsx';
import ConnectWithPartner from '../screens/explore/questions/connectWithPartner.tsx';
import ConnectedSuccessfully from '../screens/explore/questions/connectedSuccessfully.tsx';
import Quiz from '../screens/explore/quizzies/home.tsx';
import QuizDetails from '../screens/explore/quizzies/details.tsx';
import QuizQuestion from '../screens/explore/quizzies/quizQuestions.tsx';
import QuizResult from '../screens/explore/quizzies/quizResult.tsx';
import GamesHome from '../screens/explore/games/home.tsx';
import GamesCompatibilty from '../screens/explore/games/compatibility.tsx';
import GamesQuestion from '../screens/explore/games/gamesQuestion.tsx';
import GamesResult from '../screens/explore/games/gamesResult.tsx';
import ComparisonHome from '../screens/explore/comparisons/home.tsx';
import ComparisonQuestion from '../screens/explore/comparisons/comparisonQuestion.tsx';
import ComparisonResult from '../screens/explore/comparisons/comparisonResults.tsx';
import Starters from '../screens/explore/starters/index.tsx';
import ExcerciseHome from '../screens/explore/excercise/home.tsx';
import CouplesQuestion from '../screens/explore/excercise/couplesExecercise.tsx';
import StartersCategoriesScreen from '../screens/explore/starters/starters-categories/index.tsx';
import QuestionsCategoriesScreen from '../screens/explore/questions/questions-categories/index.tsx';
import GamesCategoriesScreen from '../screens/explore/games/games-categories/index.tsx';
import ComparisonsCategoriesScreen from '../screens/explore/comparisons/comparisons-categories/index.tsx';
import QuizziesCategoriesScreen from '../screens/explore/quizzies/quizzies-categories/index.tsx';
import SpecialGamesScreen from '../screens/explore/games/games-categories/special-games.tsx';
import { TouchableOpacity } from 'react-native';
import { FloatingPlayer } from '../components/floating-player/index.tsx';
import SharedWishListScreen from '../screens/idea-hub/wishlist/shared-wishlist/index.tsx';
import CardGamesCategoryScreen from '../screens/idea-hub/wishlist/card-games/index.tsx';
import PhotoShootScreen from '../screens/idea-hub/wishlist/photoshoot/index.tsx';
import WishListDetailScreen from '../screens/idea-hub/wishlist/wishlist-details/index.tsx';
import WishListScreen from '../screens/idea-hub/wishlists/index.tsx';
import MedicationGroup from '../../screens/self-therapy/mediation-group/index.tsx';
import PodCastGroupDetail from '../../screens/self-therapy/podcastGroup/index.tsx';
import ExplorePodcast from '../../screens/self-therapy/explore-podcasts/index.tsx';

type Props = {};

const {Screen, Navigator} = createNativeStackNavigator<RootStackParamList>();

const Navigation: FC<Props> = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        // initialRouteName={ScreenEnums.ONBOARDING_STACK}
        // initialRouteName={ScreenEnums.AUTH_STACK}
        initialRouteName={ScreenEnums.BOTTOM_TAB_STACK}>
        <Screen name={ScreenEnums.LANDING} component={LandingScreen} />
        <Screen
          name={ScreenEnums.BOTTOM_TAB_STACK}
          component={BottomTabNavigation}
        />
        <Screen name={ScreenEnums.AUTH_STACK} component={AuthStackNavigator} />
        <Screen
          name={ScreenEnums.ONBOARDING_STACK}
          component={OnboardingStackNavigator}
        />
        <Screen name={ScreenEnums.ROOT_STACK} component={RootStackNavigator} />
        <Screen
          name={ScreenEnums.CURRATED_STACK}
          component={CurratedStackNavigator}
        />
        <Screen name={ScreenEnums.JOURNAL_STACK} component={JournalStack} />
        <Screen name={ScreenEnums.BOOKSESSION} component={BookSession} />
        <Screen name={ScreenEnums.EXPLOREDETAILS} component={ExploreOptions} />
        <Screen name={ScreenEnums.MEDITATION_GROUP} component={MedicationGroup} />
        <Screen name={ScreenEnums.PODCAST_GROUP} component={PodCastGroupDetail} />
        <Screen name={ScreenEnums.EXPLORE_PODCASTS} component={ExplorePodcast}/>
        <Screen name={ScreenEnums.QUIZZIES} component={Quiz} />
        <Screen name={ScreenEnums.QUIZDETAILS} component={QuizDetails} />
        <Screen name={ScreenEnums.QUIZQUESTION} component={QuizQuestion} />
        <Screen name={ScreenEnums.EXPLOREDETAIL} component={ExploreDetail} />
        <Screen name={ScreenEnums.LISTOPTIONS} component={ListOptions} />
        <Screen name={ScreenEnums.SELECTEDOPTION} component={SelectedOption} />
        <Screen name={ScreenEnums.TURNCHOICE} component={TurnChoice} />
        <Screen name={ScreenEnums.PICKEDCHOICE} component={PickedChoice} />
        <Screen name={ScreenEnums.QUIZZESINTRO} component={QuizziesIntro} />
        <Screen
          name={ScreenEnums.QUIZZESQUESTIONS}
          component={QuizziesQuestions}
        />
        <Screen name={ScreenEnums.QUIZZIESRESULTS} component={QuizziesResult} />
        <Screen
          name={ScreenEnums.SPARKUNIVERSITY}
          component={SparkUniversity}
        />
        <Screen name={ScreenEnums.QUESTIONS} component={Questions} />
        <Screen name={ScreenEnums.SUBHOME} component={QuestionsSubHome} />
        <Screen name={ScreenEnums.COMMUNICATIONS} component={Communications} />
        <Screen
          name={ScreenEnums.CONNECTWITHPARTNER}
          component={ConnectWithPartner}
        />
        <Screen name={ScreenEnums.QUIZRESULT} component={QuizResult} />
        <Screen
          name={ScreenEnums.CONNECTEDSUCCESSFULLY}
          component={ConnectedSuccessfully}
        />
        <Screen name={ScreenEnums.GAMESHOME} component={GamesHome} />
        <Screen
          name={ScreenEnums.GAMESCOMPATIBILITY}
          component={GamesCompatibilty}
        />
        <Screen name={ScreenEnums.GAMESQUESTION} component={GamesQuestion} />
        <Screen name={ScreenEnums.GAMESRESULT} component={GamesResult} />
        <Screen name={ScreenEnums.COMPARISONHOME} component={ComparisonHome} />
        <Screen
          name={ScreenEnums.COMPARISONQUESTIONS}
          component={ComparisonQuestion}
        />
        <Screen
          name={ScreenEnums.COMPARISONRESULT}
          component={ComparisonResult}
        />
        <Screen name={ScreenEnums.STARTERS} component={Starters} />
        <Screen name={ScreenEnums.EXCERCISEHOME} component={ExcerciseHome} />
        <Screen
          name={ScreenEnums.COUPLESQUESTION}
          component={CouplesQuestion}
        />
        <Screen
          name={ScreenEnums.PARTNERQUESTION}
          component={CouplesQuestion}
        />
        <Screen
          name={ScreenEnums.STARTERS_CATEGORIES}
          component={StartersCategoriesScreen}
        />

<Screen
          name={ScreenEnums.QUESTIONS_CATEGORIES}
          component={QuestionsCategoriesScreen}
        />


<Screen
          name={ScreenEnums.GAMES_CATEGORIES}
          component={GamesCategoriesScreen}
        />

<Screen
          name={ScreenEnums.COMPARISONS_CATEGORIES}
          component={ComparisonsCategoriesScreen}
        />

<Screen
          name={ScreenEnums.QUIZZIES_CATEGORIES}
          component={QuizziesCategoriesScreen}
        />

<Screen
          name={ScreenEnums.SPECIAL_GAMES}
          component={SpecialGamesScreen}
        />

<Screen
          name={ScreenEnums.WISHLIST}
          component={WishListScreen}
        />

<Screen
          name={ScreenEnums.SHARED_WISHLIST}
          component={SharedWishListScreen}
        />


<Screen
          name={ScreenEnums.CARDGAMESCATEGORY}
          component={CardGamesCategoryScreen}
        />

<Screen
          name={ScreenEnums.PHOTOSHOOT}
          component={PhotoShootScreen}
        />

<Screen
          name={ScreenEnums.WISHLIST_DETAILS}
          component={WishListDetailScreen}
        />
        



      </Navigator>

     <FloatingPlayer style={{
      position: 'absolute',
      left: 9,
    
      bottom: 78,
      
     }} />

    </NavigationContainer>
  );
};

export default Navigation;
