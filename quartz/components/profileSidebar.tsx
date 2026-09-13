import { QuartzComponent, QuartzComponentConstructor } from "./types"
import style from "./styles/profileSidebar.scss"

const profile = {
  avatar: "/static/images/profile.png",
  name: "Michael Lee",
  pronouns: "",
  bio: "Co-op @ Entegris | Mechanical Engineer and lifelong learner",

  citizenship: "U.S. Citizen",
  location: "Denver, CO",
  employer: "",
  email: "mlee.engr@proton.me",
  phone: "+1 (720) 778-1846",
  linkedin: "mlee-engr",
}

const profileSidebar: QuartzComponent = () => {
  const phoneHref = profile.phone.replace(/[\s\-()+]/g, "")

  return (
    <aside class="profile-sidebar">

      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      />

      <div itemscope itemtype="http://schema.org/Person">

        {/* Avatar */}
        <div class="author__avatar">
          <img
            src={profile.avatar}
            alt={profile.name}
            fetchpriority="high"
          />
        </div>

        {/* Name / Bio */}
        <div class="author__content">
          <h3 class="author__name">
            {profile.name}
          </h3>

          {profile.pronouns && (
            <p class="author__pronouns">
              {profile.pronouns}
            </p>
          )}

          {profile.bio && (
            <p class="author__bio">
              {profile.bio}
            </p>
          )}
        </div>

        {/* Profile Information */}
        <div class="author__urls-wrapper">
          <ul class="author__urls">

            {/* Citizenship */}
            {profile.citizenship && (
              <li>
                <i
                  class="fas fa-fw fa-passport icon-pad-right"
                  aria-hidden="true"
                ></i>
                <span>{profile.citizenship}</span>
              </li>
            )}

            {/* Location */}
            {profile.location && (
              <li>
                <i
                  class="fas fa-fw fa-location-dot icon-pad-right"
                  aria-hidden="true"
                ></i>
                <span>{profile.location}</span>
              </li>
            )}

            {/* Employer */}
            {profile.employer && (
              <li>
                <i
                  class="fas fa-fw fa-building-columns icon-pad-right"
                  aria-hidden="true"
                ></i>
                <span>{profile.employer}</span>
              </li>
            )}

            {/* Email */}
            {profile.email && (
              <li>
                <i
                  class="fas fa-fw fa-envelope icon-pad-right"
                  aria-hidden="true"
                ></i>
                <a href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </li>
            )}

            {/* Phone */}
            {profile.phone && (
              <li>
                <i
                  class="fas fa-fw fa-phone icon-pad-right"
                  aria-hidden="true"
                ></i>
                <a href={`tel:${phoneHref}`}>
                  {profile.phone}
                </a>
              </li>
            )}

            {/* LinkedIn */}
            {profile.linkedin && (
              <li>
                <i
                  class="fab fa-fw fa-linkedin icon-pad-right"
                  aria-hidden="true"
                ></i>
                <a
                  href={`https://www.linkedin.com/in/${profile.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            )}
            
          </ul>
        </div>

      </div>
    </aside>
  )
}

profileSidebar.css = style

export default (() => profileSidebar) satisfies QuartzComponentConstructor