import {
  Home,
  MessageCircle,
  Search,
  UserIcon,
  Users,
  type LucideIcon,
} from "lucide-react";

import bgImage from "./bgImage.png";
import group_users from "./group_users.png";
import logo from "./logo.svg";
import sample_cover from "./sample_cover.jpg";
import sample_profile from "./sample_profile.jpg";
import sponsored_img from "./sponsored_img.png";

// -----------------------------
// ✅ TYPES
// -----------------------------

export interface MenuItemType {
  to: string;
  label: string;
  Icon: LucideIcon;
}

export interface UserType {
  _id: string;
  email: string;
  full_name: string;
  username: string;
  bio: string;
  profile_picture: string;
  cover_photo: string;
  location: string;
  followers: string[];
  following: string[];
  connections: string[];
  posts: string[];
  is_verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface StoryType {
  _id: string;
  user: UserType;
  content: string;
  media_url: string;
  media_type: "text" | "image" | "video";
  background_color: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostType {
  _id: string;
  user: UserType;
  content: string;
  image_urls: string[];
  post_type: "text" | "image" | "text_with_image";
  likes_count: string[]; // user IDs
  createdAt: string;
  updatedAt: string;
}

export interface MessageType {
  _id: string;
  from_user_id: string | UserType;
  to_user_id: string | UserType;
  text: string;
  message_type: "text" | "image" | "video";
  media_url: string;
  seen: boolean;
  createdAt: string;
  updatedAt: string;
}

// -----------------------------
// ✅ ASSETS
// -----------------------------

export const assets = {
  logo,
  sample_cover,
  sample_profile,
  bgImage,
  group_users,
  sponsored_img,
} as const;

// -----------------------------
// ✅ MENU ITEMS
// -----------------------------

export const menuItemsData: MenuItemType[] = [
  { to: "/", label: "Feed", Icon: Home },
  { to: "/messages", label: "Messages", Icon: MessageCircle },
  { to: "/connections", label: "Connections", Icon: Users },
  { to: "/discover", label: "Discover", Icon: Search },
  { to: "/profile", label: "Profile", Icon: UserIcon },
];

// -----------------------------
// ✅ DUMMY USERS
// -----------------------------

export const dummyUserData: UserType = {
  _id: "user_2zdFoZib5lNr614LgkONdD8WG32",
  email: "admin@example.com",
  full_name: "John Warren",
  username: "john_warren",
  bio: "🌍 Dreamer | 📚 Learner | 🚀 Doer\r\nExploring life one step at a time.\r\n✨ Staying curious. Creating with purpose.",
  profile_picture: sample_profile,
  cover_photo: sample_cover,
  location: "New York, NY",
  followers: ["user_2", "user_3"],
  following: ["user_2", "user_3"],
  connections: ["user_2", "user_3"],
  posts: [],
  is_verified: true,
  createdAt: "2025-07-09T09:26:59.231Z",
  updatedAt: "2025-07-21T06:56:50.017Z",
};

export const dummyUser2Data: UserType = {
  ...dummyUserData,
  _id: "user_2",
  username: "Richard Hendricks",
  full_name: "Richard Hendricks",
  profile_picture:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
};

export const dummyUser3Data: UserType = {
  ...dummyUserData,
  _id: "user_3",
  username: "alexa_james",
  full_name: "Alexa James",
  profile_picture:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
};

// -----------------------------
// ✅ DUMMY STORIES
// -----------------------------

export const dummyStoriesData: StoryType[] = [
  {
    _id: "68833d466e4b42b685068860",
    user: dummyUserData,
    content:
      "📌 This isn't the story I wanted to tell… not yet. But if you're reading this, know that something interesting is in motion 🔄. The next post will make more sense 🧩.",
    media_url: "",
    media_type: "text",
    background_color: "#4f46e5",
    createdAt: "2025-07-25T08:16:06.958Z",
    updatedAt: "2025-07-25T08:16:06.958Z",
  },
  {
    _id: "688340046e4b42b685068a73",
    user: dummyUserData,
    content: "",
    media_url: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    media_type: "image",
    background_color: "#4f46e5",
    createdAt: "2025-07-25T08:27:48.134Z",
    updatedAt: "2025-07-25T08:27:48.134Z",
  },
];

// -----------------------------
// ✅ DUMMY POSTS
// -----------------------------

export const dummyPostsData: PostType[] = [
  {
    _id: "68773e977db16954a783839c",
    user: dummyUserData,
    content:
      "We're a small #team with a big vision — working day and night to turn dreams into products, and #products into something people love.",
    image_urls: ["https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg"],
    post_type: "text_with_image",
    likes_count: [],
    createdAt: "2025-07-16T05:54:31.191Z",
    updatedAt: "2025-07-16T05:54:31.191Z",
  },
  {
    _id: "686e6d0407845749500c24cd",
    user: dummyUserData,
    content:
      "Unlock your potential—every small step counts. Stay consistent, stay focused, and trust the process. 🌱✨",
    image_urls: [],
    post_type: "text",
    likes_count: [],
    createdAt: "2025-07-09T13:22:12.601Z",
    updatedAt: "2025-07-09T13:22:12.601Z",
  },
];

// -----------------------------
// ✅ DUMMY MESSAGES
// -----------------------------

export const dummyRecentMessagesData: MessageType[] = [
  {
    _id: "68833af618623d2de81b5381",
    from_user_id: dummyUser2Data,
    to_user_id: dummyUserData,
    text: "I seen your profile",
    message_type: "text",
    media_url: "",
    seen: true,
    createdAt: "2025-07-25T08:06:14.436Z",
    updatedAt: "2025-07-25T08:47:47.768Z",
  },
];

export const dummyMessagesData: any = [
  {
    _id: "6878cc3217a54e4d37480122",
    from_user_id: "user_2zwZSCMRXQ9GaEEVLgm6akQo96i",
    to_user_id: "user_2zdFoZib5lNr614LgkONdD8WG32",
    text: "",
    message_type: "image",
    media_url: "https://images.pexels.com/photos/106341/pexels-photo-106341.jpeg",
    createdAt: "2025-07-17T10:10:58.524Z",
    updatedAt: "2025-07-25T10:43:50.346Z",
    seen: true,
  },
];

// -----------------------------
// ✅ CONNECTIONS, FOLLOWERS, ETC.
// -----------------------------

export const dummyConnectionsData: UserType[] = [
  dummyUserData,
  dummyUser2Data,
  dummyUser3Data,
];

export const dummyFollowersData: UserType[] = [dummyUser2Data, dummyUser3Data];

export const dummyFollowingData: UserType[] = [dummyUser2Data, dummyUser3Data];

export const dummyPendingConnectionsData: UserType[] = [dummyUserData];
