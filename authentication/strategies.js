import passport from 'passport';
import Instagram from 'passport-instagram';

export function instagram() {
  const InstagramStrategy = Instagram.Strategy;

  passport.use(new InstagramStrategy({
    clientID: "3f2731bcb4c44eb794aa89b12e844ca3",
    clientSecret: "da50eda0e0ea4e7889838f8e06b1ab06",
    callbackURL: "http://localhost:3000/auth/instagram/callback"
  }, (accessToken, refreshToken, profile, done) => {
    let user = {};
    user.name = profile.displayName;
    user.homePage = profile._json.data.website;
    user.image = profile._json.data.profile_picture;
    user.bio = profile._json.data.bio;
    user.media = `https://api.instagram.com/v1/users/${profile.id}/media/recent/?access_token=${accessToken}&count=8`
    console.log("profile: ", profile);
    done(null, user)
  }))
}