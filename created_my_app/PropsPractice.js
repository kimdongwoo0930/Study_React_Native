import { Image, StyleSheet, Text, View } from "react-native";

/**
 * Header
 * MyProfile
 * Division
 * FriendSection
 * FriendList
 */

const Header = (props) => {
  return <Text>{props.title}</Text>;
};
const MyProfile = () => {
  return <Profile name="윤하" profileSize={50} />;
};
const Division = () => {
  return <Text>Division</Text>;
};
const FriendSection = () => {
  return <Text>FriendSection</Text>;
};
const FriendList = () => {
  return (
    <View>
      <Profile name="가" profileSize={30} />
      <Profile name="나" profileSize={30} />
      <Profile name="다" profileSize={30} />
      <Profile name="라" profileSize={30} />
      <Profile name="마" profileSize={30} />
    </View>
  );
};

const Profile = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{
          uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGBgaHR0eHBwaGhoaIR4hHB4aGhgaHBwcIS4lHCErHxocJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQkJCs0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAPsAyQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgEABwj/xABAEAABAwIDBQcCBAQEBQUAAAABAAIRAyEEEjEFQVFhgQYicZGhsfATwTLR4fEUQlJyYoKSogcVMzSyFiMkY8L/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAIxEAAwEAAgICAwEBAQAAAAAAAAECEQMhEjEEQRMiUWFCBf/aAAwDAQACEQMRAD8AaFqg5qIcxQLV47k+lVAzgqntRRaq3MSOSs0CPYqHsRrmqhw5pXJaaAXhDvRj2oZ7UviVlgdRUvCLcxUOaqyFgjwqXIt7FWWXiPUe+5XkjYA9UuTL+Fc6wBPgqMRgHtuWOA4wY81eZeejjup3NFzgqXNRT2qtzU6OekCuaqnBEuYqyxMjmqQYtXHNVxYoFqOkqkohRhXlqiQnTJOSmF4tVkKJajoviVwvQVMheW0XxPvrmqBYiXMVbmrhcHtKgZzVU5qJeFU4KbkrNAz2qh7UYWql7EjktNAL2ShXsTB7Uq2rjm0m8XHQfcoxxuniHrlmJ8qeIoxNRrBLiB4padotcbXSzEVHPdJufm5do0riYHnJ5QvR4/hyl+3Z5XL/AOnVPI6QzZVzGA09LoZ+MAkHQEeJvFj90zw+DAaTceQt4j7zqlmPwWveiSSJ18RN/RXXx5l6kRv5fLU42EMZ9RoghtpMgnfyif1CJwGHeJADj/ZlG/hoVm8SHsGunA+/qidn7YcyPxeNo/3BXn0cb5O+zQVcIx05xJ5gscfCZa7XTN5JRj8EGGxBHFpnlcEnhxjgnGG2s2pZzGE8HQ0nrlIRNfZzKgJb3T/QDcdICnXDNeujojnqf9RkDS4KosTnEYEsO8wbWiOoMHog60mZA8QFzXx1Ps6Zub9C1zAoFiMdTVbmJA1AGWKssRj2KstWJOAZzFEtRDgoFqOiOSgtXIVzguI6J4n39wVbmq1cIU3J36DPYoFiKLVWWqbkZUCuYq3MRhaoOal8B1Yo2hiWUmZndAN54BYbE1C9xc67j8geCN29tT6lQx+BstbzjV3U+wStoLpmAN97b9fXyK9D4/D4rfs835fyPN+K9IhMmAf9NvNx3+CZbOwveiA47/Dfc343KDpgTDep0ty8faVpthsLAwt/HUPctoNXVI4N70cw4j8N+vMOOfZLaTxQYBlBqRp/K2BJJ5gazEbxJhYzFV3ucS8kmb6gTpA8LjoVs9q4Qw939ENB/qcN3gHX4f8AtO5JU3Y5LmMyy4wDJ4RJJO+NebncFqSwLVUxUzDZmd82AknfY/v5oejShxt4W4bvZbF+ys8sAhrYE/1Hu5nesAbhzkqvC9nXFxadTMeI1nqo1SkdcTYoZhcwBa3MP6N45sdaPHxRuz8VDm5++w6PjvCYtO43ATbDbHc10EX0IG+eHPTyVlbZUOLos/8AF/dvPWSmi1SG8GmR2xgCWZ23HHNIPjP5rKVWXIiF9J2DS7ppPGYEGJEzv4awR0Pnle0myfovMAluvgDoWngqNKljMm5eoyz2RKoeEfXZvCFqMXFXH4vDtXIqnQYhUuRDmqlzFvAR2VOVbirXBVFqPgI6IFRlSc1cQ8BPM/QBXiurkqJ3HoUYXi5RL0uoOEXMSftLjvo0Hu/mPcb4u39BJ6JwaixPb/FSaTOAc49Ya2fJ3mniVVJCctOYbMe9xJ4nh80FlF9fQA2/8j9hEW3dVCq+JA/zH5qfnjTT48vQ7vE2HmvSlYeJVax3gGZnMpi1sz3cG3dA4k6nkAPDa9m2x9WuR+FmRgO6YydBlFv/ALHLF7KpkMn+Z59N58yPIrc4B4bRyjeZHhoB/tHmtpaJ6Cf4SRTYRLWjO4R+I2N+MyP9ZR+zNnNL5IEiS475N/WSr8MyQDuExusJ8x+HyTLZ7AAeJN1PkZdegSns65sJkn2geik/BTDm6mCP7hu6gJu1q42jct4iR4jWPdc194NNYKa+DzAPAvvHupOwoLcw3gX6WJ6+xTWjSIdG5w9f1uh3NyOLNxvHv85puP8AVmqtAaGGDS12m8eLLx5GPLglXaKiHtNrtktngdW8rifJaIgTl5yPukO1Bfwn1XTLFS1nzjEUQDAsDpyO8IR9NPdo0IfHOQhqmE5I+KoFV49CR9JUuongnT8KqHYVH8aE/KhQ5ltFSaSbvoKh9Fb8ZnyJip1NQ+n8+BMn0VX9H5KH4xPNH25RJXXFcK8ts9dEHKBcpOKrLlMdHHFfM+19RxruJ00b4C3uT5r6U8rBdt6bg5rv5QI87n7q/wAd5RD5U7xPDIi9t29XU6MuDeJv+XQepKjTGUZj0/VFbLFy47hbxK9HTxZXY5wbbmN1vK3/AJOcVpqFSA0TwHlqfnFZ7As0HE+g0TnCVJeeWnsUmnZCNPhcRbLwHv8AsE9wWl1ktmd555W+ei1mEFh4KN0UwJpPkgfNEXXEZXf0kHpofQpdhjdvj9h90zqNzNcOSRvsRrD2IESeF/nmgNrO7zHD5ZGl4LQeIv7EeqWYnRo3tJ8gIn1CKZpRRiXwQfl9Er2pe/Ee6YYogZfLobpXia0sjhb583qksokZzGMBInp6yFMMYQqMS7vdfdDl0K3sna1hbsK1UvwQUJm4JUPqOG/zRTr+knC/hF+CQtTB8kaMS8KX8VxamVUhHxr6FD8JyVX8HyTs12HULudnH55J/wAn+E/xv+m5cVWSpOKrcV4bZ76RxxUCvOKrJSNlFJ15WY7V0Q5nl16eA9VpHFJtt0w5kExaZ9T85lPx1lIHJOw0fN6tzboPQev2TPC04DWjUmT0+DyKGrMDXkWu4fvyTWkyI8PyJ9T7r0/LTw1GU9DKNpPQewRezqgEu3a+X6oQDQcP2+eBVz6RAaNJ1484Stl5H2ysW1p7x5nqP0WoobWp5LOGixeD2cXauyhxuY6AenvxTuh2fY0TndMjhBvu81CqTZVLrsfU8czMCHaGE4w9fNcFZvD7DtIJPqmGCJYcspWxWkw6mQMzTxkcwf1SXaGJcC4jUD91pAwOEpHjaF3Tr+4QemlrTN4itVcBm0i3T56oN9N++xiT0EnTkiau38Ox5pHNUdmDYYM1zYAOiJnh4IXE4umX5CH037m1GlvQSBzCrLaXY3lLeJgdencTvv1BIj09UDVKdY7DlrWkTcSJ6W9/RJKivNagOdJMfCtcAULCmxpOhTNhUlwYotC9DlF7yNQgmBwiVVqpyDgPnRXsdIXfp/ICPkK+NG4cqnK5zFU4LyKPTkqKrcVaWqlzFNplVhBzrQl2NZnkHSDM6RA1PRG1RCUbXL/pHLa4nwJ/OE0p6a3k9Gc2ls4Zw9kRy0tvU3/iCOxTcrGQY7snmhKjYLTqSJJPDwXdx3k9nk8sLy6+w/DUbCfH50RxYBcxZdoMJIKd0tlB4A0HO/kElW6Y0ypRmsbtr6YDQ0PedGg+53BC1Nr4xj2ZoAJBdkaCGjfrdxid4Gui2Tey1NpBbMjeTP7Jg3YQcAHBro4tHlzTS0va0S5denhHZWMrMo0atZwcyqBcAgszHul17tNr89AmuNYWuE/OCNwlAtu45jEX3DgOC5jwCZ5I1j9Cy2ngVgbtQW0cE57HhmptrEddyL2W+0cle0wSghG2qZ822d2PYys2o+5aWmGg3LTI3cQFpquz2Vqoe5kRoTr+n6p8+lO6V4U4RptjJyu0uzNdp8IwMDtIkWA4EgaiNNV80r1DJ8Py+6+odsP+h/mH3XzWvTsef219fZPFYi8LVoMzEcdyJZUag3UlHLGiqno+DljwpEApTRrJlRqGEj6DhNtJW/THAeSgHxuU58fRDTeJsHqhyveVS8rz6OpECVVUfAVpKHrQUEOgd+9x+cEsxOIkhgEgyHcIvPVG4upuFh890ir1JzRoPxEHWBoDuHP9VSZ0W30UbXYcjCNGy0/moYaHmDEltucCI8l7A48OhvdDtADYObwHMfZW1sG1+hLHC4I9lVrxTTOFtU9Q/wAC3ut8E9wVXS/yEiwJkDomlAxdT0zRpKLwfH586I2ixKcE9NqBVESpBGVKtqVgwa8k3OizFet9So8bgSB/lsSjTxA41rG2yH89UfXMFZzZG0GT3HteAdWkH2TWptFpc1lyXToD6nctNLAXL8tGlJwIUaqqogtEFdqOT70TzsyvbatFNo4unyBHu4L59UfPz5wWs7bVszg3g2/U/oPJYqtA1Q9HocUrxJaqDwFX9ReL7aIqmUcoqewzKIw2JcDB0XqQzblYcI5Z0DxGNOqCLK2Ql2GY4IzPy9FtN4mzc5UuKmVBy4dLIg8oesZHhqrnILGPysPE280V7H+hXiqheQwaauPrCVbWq5WZRbj6T7pzVZlFtfh9gsvtupNt/wC27zXVxLWcnyL8Yf8ARM91wf8AGPTT54LZYFofQe9zm5mby4iA2CSY1JFgDr6rG4cSSf8AFPQwPs3zWmw2x3vwlX6b2k1AxxZIA7uYw47jA03yuipTXZ5MclLtDnY20KdWcjswBg2Iv1C0NASvmXYrEZajm7nAOHSzvQ+i+m4YyuSp8aw7eO/OUxhhXQU5w70jp2hM6L0UwMbNKSYnYI7+V5AfMggHXdKObXhBY/bdNgu4eaZ59iynv6kNndnKdMTJJF4s0c7fqtAxgtAFtOU8OCwb+05c7uB55tBjz0RmF2rXzT9N0DeXMv0zLJpfRSuG6WtmweULXfAJOgknoq6NZ7gC5uWd0z7IDtDiQ2mWz+O3Tf8AbzR9kpnvD592j2hmqP538p/NZmrXJ1WgxtBhfmLvk/ql+I2cDcH2Q3s9CZyRSa5Hz5xROBcSdLfNVN+zO7IKso4UgAtsVtGSYU2uxhJggr3/ADAEW/JdeTlhzQSqqbm723WDhfQxh3iyK/ighW1QBpoq/wCIZ8H6ogN64qtxXnPUHOXDpVIhUddAYl2Zx4NHqUY98XO4IFzSGE7zc9f3TwEXY6pYngB6yPzWSx1bMXTOsAjUTmGm/wAFoNq4jK0jwaPb7rMkXnnbmSf1Pmu/hnFp5XzL14H4jZJpUqVRxMVCQRl0bbK6ZMyb7tPK7FSzZz7xmrgCJ3NggEbtbb0W3ta5jKVNgzEBwqZ7tc2IaG5TuFpI3ppjsVhamFY7EsLGVHu7tMkEObHfho3idx3W3qr37OFZ3hhez9QtxDOo8wV9RwGIIHJIhsnDMwzalB2cF8te9jc/9JZngOAFjBG9NcA6R83rk53+3R1/FWTjNHTM3CNwz0hw1Yt0TWhWDtLFTmkytTg0cxp1EzxSmpsSm2XMY0E8BfzTCm+UXTAVBVTn0JaOEgjuj/SN9tE1w2D3kc/gCZUS0K17gdEyQK5qfQO4WWB7QY41HnKe6BDfYkeMnoFpe020MrMjT3ni/Ju/z081hngxbf8A/kfmT5JWy3BP/TAzSa7U3QtSm5pgGQiMSyDPzgu6pTsQI10WvdWirFo9FJ7N6oxBzciiEniCltXEOBjVElzgO8UDVqAfqigUVu2iRKH/AOYDn5Kus+dyGypjnqnp9flRJXJUS5eejtKcQZIbukE9L/ZVYk2PgrQL5uXv8C6MI6pLGgnjl1324DxK6Il00kR5LUy2zH4+XmY7u6d5JueiTYp0Qb748DMnrp5ngvoNfsxiarmtNL6bG2aDGnEkHvEpr/6OotZD6WYxdxmT5aeAXempPF5W7fs+OYcS+eYb0OvotR2up/Tw2BZxa98f3ZSJ6O18bBPMX2KY05qRgf0uMjofzSv/AIliKtNgBimxrRaOfS0I+SbI/jaTF+zcW51AMEhlO0SYEkbp1dc+IJstHs5x0Wa7J1WZ8j35WPBuXZWhwByucd4Em3HddaWl3KpYbESIta5Eanhx0g71y8y+zs4KxYxxQKJZIvKHpDeio+fmufDqC6OIO+/v+qY0Kw3EHrHuk1NF4ekXEAfOaeaaJ0kOGVSdOqJouLjBMKFCgGtACIbT7pPCPnqrT2Qt4ujPdoNiPJL2d6dRv+aeQWWrUC38QgidbL6u1oIjhZBY3ZTKgh7Qee8eBTuUw8fyXKxnyrEtzIc01s9pdkXAzScPB1vUBZvG7PqU3ZXsLPY+BGqm5Z3xzRXpi17ENk4phVaANUG94hAp5AmIfbSyT1mAlN6rvLmgKzVkwN6Ahi5lHD3Vj2QoT8hPomI+mgq3DYR9Q5GNLuPAeJRexNlmsZdZg1PHkFssLh2taGsaGtHD78Vz8XDvdCfI+Wp/WfYhwnZlovVcXH+llh1P6p9hqDWDKxgaOSKFJSFNdaSSxHmVdW9pnG0159EOBBuCrQF0BETRM7DtDSx8Zm/hPL+WbbljO1ewM7C50d4EgjcTu8dy+hvwbS7N88UJjsI17CwWEED3381hpo/PbNlvaDvLDBB3iTu3jULS4JktaHuAeAQA0WkS6zpJOoGXwTfa+ySyoRFjr0v+vQoSthqlF2V4cCCCCRMZTOcT+LlxtdLSLJYH4DEzY2I1BTFoQmAoMeZLBOlpAkcCDPRNmbIt3XOFuM+65/B/Rb8i+yum0kwFotn4TK2/4jr+S5sjY+XvOcTw0805bRA3T4/ITzxsnfMvSBmUydPP5qrcTTApuG6PhRQUKzAWkHRVmcOaqbANnYiMrXRLpiAALRIgcEzhJcDgh9TNJOUb73Jd/MNTed+qdJgMoe26jUotcIcA4cCAVe4KstKwUZ7aHZKhUu0ZHcrjq1ZLa/ZCrTlzRnaN7dR0X0wR18/ZW5EGkys81T9nwivhyNRdLazF9w2j2foVs2ZgDj/MLEHivku29nmlUew6tJHjzU6nDt4udX0Z16H+fLIyrSQ/0vH51QK6foXBYcMY1gtABPidPRMmNVFMSSeaKarHkU9JALxC6vLCkZXlxwkKqk+8HVYJaSqCyfnzcrncOK5WMBYyMptjC5nOgSYkdN3USEbhoqYVpIkst0baPCI8lc9snMNxHlp7lc2M0RUpx3S5xHgSftCyKP0Lq9BjHXY4AiwmYkk2Fstwd/FaDAUGFjXNuCBqkLsMf+nGUh3dIkm9nAiTY/cp3sqhkYGzff46RcboWaQjbGGULsLq8sKcVVdwDb6K1BbQnKYMQLeMHXksFFWzHDNUGhzSRmzak3tomSzuyKTvqlwDg0NOYmBJJkCBv0mb+abHaDMxYTDhEiDobA+CGma76CyVEkFB1azXOaIJEZgdxmwPNGtFkTYcABgj8lMleCg7UBYB5gsvnPb3Z+WrnizxrzFl9JSTtVgvqYd4iS3vDpr6StmrCnFXjWnxHE0YQmXwTjFU9QgcnP2UD0vI+/4Yz8CLAS/AVJB8T7/PJGNernlMtXl5eWAcQeK7rg7jYoxV16eYEIMKI03SQeIVeLuMo+BU4J5nKdQjHATxKyYX0xXiAcoa20nX3IVzKOVwI07sDkO77FXtpd7w3+w8FY1kmdw0RC6A8ZSh0gGHakCY0BJ5Rw1uo7PIgtmCI1yiQQNANLjeJuEwxFIOBBWe2fUDHkOLruykkgd0CBY94wYE8gsBdo0jHSJU1Q0X4dZUyCd8LCknFL9pmGRvPzQ+XVF1agY0uOjQSVlKm2zVcA4NYL5SHaHmZ5RMWlbsKNDgI+mItM6CNLXG42QIyu+s6A54gDe4BsX87+SKw5IY2Z/DNzm1vrv8UBTrA0mloJc8uLiBcDvGCd0WSN9lFPQc94+q0NBu3XQCNAAmjQk+zQc2W4ygTNtb28vdOUU97FtY8PEqLOPFRJkxuGv5KwlMIdVVZmZpHEEeasC8VjHwzazCx7mn+UkHp+yV5vHyWl7X0MuIqD/ET53WXjmkqezvmnh9wwRhxG5Mx8+fNUrpOvPzr+SZ0z8+fNU5xMtaVMFQapBYUkvLi6sYXV25agI3o5jIQu0R3QeBRTDZBexn6R0NC6uryIpxLMXstrnFws466QfMGP0CZrywU8FDca5pAc3QwbyTuGsSY+XRzcbTInMOpj38EHtaj/NutJ4EaH5wV7MEwgEsEkD7SgF5mleOrte11NsOJBB4D8/0WZw2ygw5nEk5oAbBOh426Tx1stjTw7WiGgD5KXYllNz2sETJzCQSJ1t8gStr+jThVjKmSnv0yiOY15KvGva57Wt7sCJAiZNx6c/umOJDWFpOmbhyN+iR7Qxz2OdUDQaTRmPeDbkQ0b82YEX5zuuqllfJNoa1TALpghp72niitnVy+k10iS0TF4O/qsVW7XU3NLTTdfXvA237loeze0RUpuLGBrQ7K0CLk3MwLeK0pp9gtprofiBYLrQo027zqVYnInlwrq4sY+Udu/8AuXdPYLKdPVbv/iHhoqNd/U32Kw+T5K1HVD/U+uYN8hN6B+fOnmUiwGo8U7ofb7OQRCgoKYVe/wCfN6sCIpJeXl5YBVXZmaRxH7KrBOlrfD2t9kQULgdD/cUPsK9Bi8vLyIDy8vLyxiDogzpvlUtAaQ2eJH3HqiCgtotlo/uHusFFtdxykjoZ4xdZLB5v4hpEzng6zr3vSZU620qvcGcw9rs1he3hbou4/FvotBpkNJyycrSTIJ1IPBbND6NFicS1rwHGO6Y4EkiLLI9rqR+m17XNDQ4ANG8kQQY1ywB1hNRi3uwlR5MuzC8D/BuiEDtpoexocAcpMWAjTgmXs3owJbeR5fkvpvYin/8AHDuLj/tt88VhKtISbfLrfdixFHqfdajfRpF1QPz0XXaJRT0rsKDdPJWLGMZ/xCwpdTY8D8JIPgb/AGXzX6fyF9i7Vf8AbVPAe6+Rpi0ej//Z",
        }}
        style={{ width: props.profileSize, height: props.profileSize }}
      />
      <Text>{props.name}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구" />
      <MyProfile />
      <Division />
      <FriendSection />
      <FriendList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
