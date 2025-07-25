import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {FC} from 'react';
import ScreenEnums from '../../src/enums/screen-enums.js';
import AboutYouScreen from '../../screens/about-you/index.tsx';
import AppLockScreen from '../../screens/app-lock/index.tsx';
import ArticleScreen from '../../screens/article/index.tsx';
import ChangePasswordScreen from '../../screens/auth/change-password';
import BookmarkScreen from '../../screens/bookmarks/index.tsx';
import CheckInScreen from '../../screens/check-in/index.tsx';
import CheckinHistoryScreen from '../../screens/checkin-history/index.tsx';
import DiscoverAnswerScreen from '../../screens/discovery-pack/discovery-answer/index.tsx';
import DiscoverQuestionScreen from '../../screens/discovery-pack/discovery-questions/index.tsx';
import DiscoverPackScreen from '../../screens/discovery-pack/index.tsx';
import EmergencyScreen from '../../screens/emergency/index.tsx';
import GiftCodeStatusScreen from '../../screens/gift-code/gift-code-status/index.tsx';
import GiftcodeSummaryScreen from '../../screens/gift-code/gift-code-summary/index.tsx';
import GiftRedemptionStatusScreen from '../../screens/gift-code/gift-redemption-status/index.tsx';
import GiftCodeScreen from '../../screens/gift-code/index.tsx';
import IdeaHubDetailScreen from '../../screens/idea-hub/idea-hub-details/index.tsx';
import CardGamesDetailScreen from '../../screens/idea-hub/idea-hub-wishList/index.tsx';
import CategoryDetailScreen from '../../screens/idea-hub/ideahub-category-details/index.tsx';
import IdeaHubScreen from '../../screens/idea-hub/index.tsx';
import ChoosingMentorScreen from '../../screens/mentorship/choosing-mentor/index.tsx';
import ChoosingPartnerScreen from '../../screens/mentorship/choosing-partner/index.tsx';
import MentorShipScreen from '../../screens/mentorship/index.tsx';
import MainMentorScreen from '../../screens/mentorship/main/index.tsx';
import MentorCallScreen from '../../screens/mentorship/mentor-call/index.tsx';
import ChoosingDateScreen from '../../screens/mentorship/mentor-date/index.tsx';
import MentorDetailsScreen from '../../screens/mentorship/mentor-details/index.tsx';
import MentorListScreen from '../../screens/mentorship/mentor-list/index.tsx';
import MentorMessage from '../../screens/mentorship/mentor-message/index.tsx';
import MentorReviewScreen from '../../screens/mentorship/mentor-review/index.tsx';
import SurveyEightScreen from '../../screens/mentorship/survey/survey-eight/index.tsx';
import SurveyElevenScreen from '../../screens/mentorship/survey/survey-eleven/index.tsx';
import SurveyFifteenScreen from '../../screens/mentorship/survey/survey-fifteen/index.tsx';
import SurveyFiveScreen from '../../screens/mentorship/survey/survey-five/index.tsx';
import SurveyFourScreen from '../../screens/mentorship/survey/survey-four/index.tsx';
import SurveyFourteenScreen from '../../screens/mentorship/survey/survey-fourteen/index.tsx';
import SurveyNineScreen from '../../screens/mentorship/survey/survey-nine/index.tsx';
import SurveyOneScreen from '../../screens/mentorship/survey/survey-one/index.tsx';
import SurveySevenScreen from '../../screens/mentorship/survey/survey-seven/index.tsx';
import SurveySixScreen from '../../screens/mentorship/survey/survey-six/index.tsx';
import SurveySixteenScreen from '../../screens/mentorship/survey/survey-sixteen/index.tsx';
import SurveySixteenScreen1 from '../../screens/mentorship/survey/survey-sixteen1/index.tsx';
import SurveyTenScreen from '../../screens/mentorship/survey/survey-ten/index.tsx';
import SurveyThirteenScreen from '../../screens/mentorship/survey/survey-thirteen/index.tsx';
import SurveyThreeScreen from '../../screens/mentorship/survey/survey-three/index.tsx';
import SurveyTwelveScreen from '../../screens/mentorship/survey/survey-twelve/index.tsx';
import SurveyTwoScreen from '../../screens/mentorship/survey/survey-two/index.tsx';
import MovieScreen from '../../screens/movie/index.tsx';
import NotificationScreen from '../../screens/notifications/index.tsx';
import RecommendedScreen from '../../screens/recommended/index.tsx';
import ReminderScreen from '../../screens/reminder/index.tsx';
import {AppStackParamList} from '../../screens/screen.types.ts';
import ExploreDetailScreen from '../../screens/self-therapy/explore-detail/index.tsx';
import ExploreTherapyScreen from '../../screens/self-therapy/explore-therapy/index.tsx';
import SelfTherapyScreen from '../../screens/self-therapy/index.tsx';
import MusicTherapyScreen from '../../screens/self-therapy/music-therapy/index.tsx';
import MusicPlayerScreen from '../../screens/self-therapy/music-therapy/music-player/index.tsx';
import RelationshipRemediesScreen from '../../screens/self-therapy/relationship-remedies/index.tsx';
import RelationshipRemedyScreen from '../../screens/self-therapy/relationship-remedies/relationship-remedy-details/index.tsx';
import RelationshipSummaryScreen from '../../screens/self-therapy/relationship-remedies/relationship-remedy-summary/index.tsx';
import ResourcesScreen from '../../screens/self-therapy/resources/index.tsx';
import BookResourcesScreen from '../../screens/self-therapy/resources/tabs/books/books-screen/index.tsx';
import MovieResourcesScreen from '../../screens/self-therapy/resources/tabs/movies/movie-screen/index.tsx';
import SetReminderScreen from '../../screens/set-reminder/index.tsx';
import SettingsScreen from '../../screens/settings/index.tsx';
import SpecialEventsScreen from '../../screens/special-events/index.tsx';
import TrendingScreen from '../../screens/trending/index.tsx';
import WeeklyChallengeDetailScreen from '../../screens/weekly-challenge/challenge-detail/index.tsx';
import WeeklyChallengeScreen from '../../screens/weekly-challenge/index.tsx';

import WhatsNewScreen from '../../screens/whats-new/index.tsx';
import PlatformNotificationScreen from '../../screens/platform-notifications/index.tsx';
import MedicationGroup from '../../screens/self-therapy/mediation-group/index.tsx';
import ExplorePodcast from '../../screens/self-therapy/explore-podcasts/index.tsx';
import PodCastGroupDetail from '../../screens/self-therapy/podcastGroup/index.tsx';
import { exploreMeditation } from '../../screens/self-therapy/explore-therapy/explore-therapy.data.ts';
import WeeklyChallengeHistoryScreen from '../../screens/weekly-challenge/weekly-challenge-history/index.tsx';
import MyMentor from '../../screens/mentorship/My-Mentor/MyMentor.tsx';
import FavoriteMentor from '../../screens/mentorship/Fav-Mentor/FavoriteMentor.tsx';
import RelationshipCookBook from '../../screens/explore/relationship-cook-book/index.tsx';
import RelationshipCookBookDetail from '../../screens/explore/relationship-cook-book/relationship-cook-book-detail-page.tsx';
import VideoPlayer from '../../screens/explore/relationship-cook-book/relationship-cook-book-detail-page.tsx';
import VideoPlayerScreen from '../../screens/explore/relationship-cook-book/relationship-cook-book-detail-page.tsx';

const {Screen, Navigator, Group} =
  createNativeStackNavigator<AppStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'fade',
  gestureEnabled: true,
  // gestureDirection: 'vertical',
  animationDuration: 400,
};

const RootStackNavigator: FC = () => {
  return (
    <Navigator>
      <Group screenOptions={screenOptions}>
        <Screen name={ScreenEnums.CHECK_IN} component={CheckInScreen} />
        <Screen
          name={ScreenEnums.SPECIAL_EVENTS}
          component={SpecialEventsScreen}
        />
        <Screen name={ScreenEnums.RECOMMENDED} component={RecommendedScreen} />
        <Screen name={ScreenEnums.REMINDER} component={ReminderScreen} />
        <Screen name={ScreenEnums.SET_REMINDER} component={SetReminderScreen} />
        <Screen name={ScreenEnums.SETTINGS} component={SettingsScreen} />
        <Screen
          name={ScreenEnums.NOTIFICATIONS}
          component={NotificationScreen}
        />
        <Screen name={ScreenEnums.APP_LOCK} component={AppLockScreen} />
        <Screen name={ScreenEnums.BOOKMARK} component={BookmarkScreen} />
        <Screen name={ScreenEnums.EMERGENCY} component={EmergencyScreen} />
        <Screen name={ScreenEnums.ABOUT_YOU} component={AboutYouScreen} />
        <Screen
          name={ScreenEnums.MUSIC_THERAPY}
          component={MusicTherapyScreen}
        />
        <Screen
          name={ScreenEnums.EXPLORE_THERAPY}
          component={ExploreTherapyScreen}
        />
        <Screen name={ScreenEnums.SELF_THERAPY} component={SelfTherapyScreen} />
        <Screen
          name={ScreenEnums.EXPLORE_DETAIL}
          component={ExploreDetailScreen}
        />
        <Screen
          name={ScreenEnums.RELATIONSHIP_REMEDIES}
          component={RelationshipRemediesScreen}
        />
        <Screen
          name={ScreenEnums.RELATIONSHIP_REMEDY}
          component={RelationshipRemedyScreen}
        />
        <Screen
          name={ScreenEnums.RELATIONSHIP_SUMMARY}
          component={RelationshipSummaryScreen}
        />
        <Screen 
          name={ScreenEnums.MEDITATION_GROUP}
          component={MedicationGroup}
         />
          <Screen 
          name={ScreenEnums.PODCAST_GROUP}
          component={PodCastGroupDetail}
         />
          <Screen 
          name={ScreenEnums.EXPLORE_PODCASTS}
          component={ExplorePodcast}
         />
          {/* <Screen name={ScreenEnums.EXPLORE_MEDITATION} component={exploreMeditation}/> */}
        <Screen name={ScreenEnums.RESOURCES} component={ResourcesScreen} />
        <Screen name={ScreenEnums.WHATS_NEW} component={WhatsNewScreen} />

        <Screen name={ScreenEnums.IDEA_HUB} component={IdeaHubScreen} />

        <Screen
          name={ScreenEnums.IDEA_HUB_DETAILS}
          component={IdeaHubDetailScreen}
        />

        <Screen
          name={ScreenEnums.IDEA_HUB_CATEGORY_DETAILS}
          component={CategoryDetailScreen}
        />

        <Screen name={ScreenEnums.GIFT_CODE} component={GiftCodeScreen} />
        <Screen
          name={ScreenEnums.GIFT_CODE_SUMMARY}
          component={GiftcodeSummaryScreen}
        />
        <Screen
          name={ScreenEnums.GIFT_CODE_STATUS}
          component={GiftCodeStatusScreen}
        />
        <Screen
          name={ScreenEnums.WEEKLY_CHALLENGE}
          component={WeeklyChallengeScreen}
        />
         <Screen
          name={ScreenEnums.WEEKLY_CHALLENGE_HISTORY}
          component={WeeklyChallengeHistoryScreen}
        />
        <Screen name={ScreenEnums.MOVIE_OF_THE_WEEK} component={MovieScreen} />
        <Screen
          name={ScreenEnums.RESOURCES_MOVIE}
          component={MovieResourcesScreen}
        />
        <Screen
          name={ScreenEnums.RESOURCES_BOOK}
          component={BookResourcesScreen}
        />
        <Screen name={ScreenEnums.MUSIC_PLAYER} component={MusicPlayerScreen} />
        <Screen name={ScreenEnums.ARTICLE} component={ArticleScreen} />
        <Screen name={ScreenEnums.TRENDING} component={TrendingScreen} />
        <Screen
          name={ScreenEnums.CARD_GAME_DETAILS}
          component={CardGamesDetailScreen}
        />

        <Screen
          name={ScreenEnums.WEEKLY_CHALLENGE_DETAIL}
          component={WeeklyChallengeDetailScreen}
        />

        <Screen
          name={ScreenEnums.DISCOVERY_PACK}
          component={DiscoverPackScreen}
        />
        <Screen
          name={ScreenEnums.GIFT_REDEMPTION_STATUS}
          component={GiftRedemptionStatusScreen}
        />
        <Screen
          name={ScreenEnums.CHECKIN_HISTORY}
          component={CheckinHistoryScreen}
        />

        <Screen
          name={ScreenEnums.DISCOVERY_QUESTIONS}
          component={DiscoverQuestionScreen}
        />

        <Screen
          name={ScreenEnums.DISCOVERY_ANSWERS}
          component={DiscoverAnswerScreen}
        />
        <Screen name={ScreenEnums.MENTORSHIP} component={MentorShipScreen} />
        <Screen
          name={ScreenEnums.MAINMENTORSHIP}
          component={MainMentorScreen}
        />

        <Screen name={ScreenEnums.MENTORLIST} component={MentorListScreen} />

        <Screen
          name={ScreenEnums.MENTORDETAILS}
          component={MentorDetailsScreen}
        />

        <Screen name={ScreenEnums.FAV_MENTOR} component={FavoriteMentor} />

        <Screen name={ScreenEnums.MY_MENTOR} component={MyMentor} />

        <Screen
          name={ScreenEnums.CHOOSING_MENTOR}
          component={ChoosingMentorScreen}
        />

        <Screen
          name={ScreenEnums.CHOOSING_PARTNER}
          component={ChoosingPartnerScreen}
        />

        <Screen name={ScreenEnums.SURVEY_ONE} component={SurveyOneScreen} />

        <Screen name={ScreenEnums.RELATIONSHIP_COOKBOOK} component={RelationshipCookBook} />
          <Screen name={ScreenEnums.VIDEO_PLAYER} component={VideoPlayerScreen} />

        <Screen name={ScreenEnums.SURVEY_TWO} component={SurveyTwoScreen} />

        <Screen name={ScreenEnums.SURVEY_THREE} component={SurveyThreeScreen} />

        <Screen name={ScreenEnums.SURVEY_FOUR} component={SurveyFourScreen} />

        <Screen name={ScreenEnums.SURVEY_FIVE} component={SurveyFiveScreen} />

        <Screen name={ScreenEnums.SURVEY_SIX} component={SurveySixScreen} />

        <Screen name={ScreenEnums.SURVEY_SEVEN} component={SurveySevenScreen} />

        <Screen name={ScreenEnums.SURVEY_EIGHT} component={SurveyEightScreen} />

        <Screen name={ScreenEnums.SURVEY_NINE} component={SurveyNineScreen} />

        <Screen name={ScreenEnums.SURVEY_TEN} component={SurveyTenScreen} />

        <Screen
          name={ScreenEnums.SURVEY_ELEVEN}
          component={SurveyElevenScreen}
        />

        <Screen
          name={ScreenEnums.SURVEY_TWELVE}
          component={SurveyTwelveScreen}
        />
        <Screen
          name={ScreenEnums.SURVEY_THIRTEEN}
          component={SurveyThirteenScreen}
        />
        <Screen
          name={ScreenEnums.SURVEY_FOURTEEN}
          component={SurveyFourteenScreen}
        />

        <Screen
          name={ScreenEnums.SURVEY_FIFTEEN}
          component={SurveyFifteenScreen}
        />

        <Screen
          name={ScreenEnums.SURVEY_SIXTEEN}
          component={SurveySixteenScreen}
        />
        <Screen
          name={ScreenEnums.SURVEY_SIXTEEN1}
          component={SurveySixteenScreen1}
        />
        <Screen name={ScreenEnums.CHOOSE_DATE} component={ChoosingDateScreen} />

        <Screen name={ScreenEnums.MENTOR_MESSAGE} component={MentorMessage} />
        <Screen name={ScreenEnums.MENTOR_CALL} component={MentorCallScreen} />
        <Screen
          name={ScreenEnums.MENTOR_REVIEW}
          component={MentorReviewScreen}
        />
        <Screen
          name={ScreenEnums.CHANGE_PASSWORD}
          component={ChangePasswordScreen}
        />

        <Screen
          name={ScreenEnums.PLATFORM_NOTIFICATION}
          component={PlatformNotificationScreen}
        />
      </Group>
    </Navigator>
  );
};

export default RootStackNavigator;
