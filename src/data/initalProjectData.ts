import { IProjectStore } from "@store/type";

export const initalProjects: IProjectStore = {
  activeView: "kanban",
  activeProjectID: "",
  projects: [
    {
      id: "5eb8e255-ac5c-436c-8bab-7a35e8b55644",
      name: "E-commerce Website Development",
      description: "Build a modern e-commerce website for a clothing brand.",
      stages: [
        {
          id: "80bca974-624b-4325-afdc-c3d7f992c3a4",
          name: "Planning",
          color: "#FF5733",
          expanded: true,
        },
        {
          id: "d4ed5765-9a16-4b32-abbe-853d278752b6",
          name: "Design",
          color: "#F0BF11",
          expanded: false,
        },
        {
          id: "0fcaed74-8adf-4bb0-98c8-22fca7ca5da8",
          name: "Development",
          color: "#3357FF",
          expanded: false,
        },
      ],
      tags: [
        {
          id: "7aad4bcf-e6b5-48cb-a1a2-6433aa96d085",
          name: "Front-End",
          color: "#FF5733",
        },
        {
          id: "690e259d-4976-4680-8650-ac703003fd64",
          name: "Back-End",
          color: "#33FF57",
        },
        {
          id: "e4a25fa0-6b9c-44e9-b2b4-b603a9cce20e",
          name: "UI/UX",
          color: "#3357FF",
        },
        {
          id: "f4c3a280-0aa6-45fe-becf-ef5059d8dad7",
          name: "Marketing",
          color: "#FF33A1",
        },
        {
          id: "f4c3a280-0aa6-45fe-becf-ef5059d4gwb9",
          name: "QA",
          color: "#3686FF",
        },
      ],
      status: "active",
    },
  ],
  tasks: [
    {
      id: "1a6c7e6f-4fd8-4c76-8c45-fa58a19ee256",
      title: "Gather Requirements",
      description:
        "Conduct interviews with stakeholders to gather requirements for the website.",
      attachments: [
        {
          id: "3e50cc2b-9280-483b-a67e-c077585b2933",
          url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAABmCAYAAABPyZSsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAADR9SURBVHgB7X0HlFvXeeb30DGD6X04lRy24YidIilRIiXZKpYly1Zc4zh2srYcp6zXyeYkPptITpx14vU5u3uyJ04c23LibtmWLRd1iWoUmwo7h2U4vfeK/vb/78MDHh4eMMAMMIXCJ4Hzernv/vfv/5UQB319cw1Wq++QLMsNyCKLLJKGJElvm83Wt4uKnO2G+/UbhoamDkGSHw4Gg4dmZybg83sNLywjDmR5/uPkuHviXzeLLNIEKeFOaf7jJSnhde02J2x2JywW62GL2fopPfFFnT0yMvWwPxB4ZGS0F1NTY4gHWZaT2m50nOG5Mv8fh9xklRCz5JhFqpAi/8ahNMmQgKQYutIfJ8UjPM12l6sIxUUVsFhtj5SV5H0pcvUQmOC8Pu8jff1t8PmMuZuKZIgpOQIU/2o2ZAksi8xD4m4vJbFtHkJLhvAsFhuqq9ZGEZ7YOzY21+D2zF5jgvP7fXE5GWPRBGfA1eQE4maEEBMck0UWMZify4VITbdfz+Wi1xdKeDVrmmCSLLeVleUdtvBGf8D36Nj4YMYJTk9chsSWiMjkLNllMT8UQtLITHLUHg0RhYZ/WUt8suiXEaLh9QjhcX/WEpR+3Qh+sosMj/ShvKzmYVo9LKlcrqu7NXyReFgcgSUmNmOCjD0uiyxShxHX0xOgulWKOiYel0uG4+m3NdQ3IxhAoyUQ8G33eOcwHxIRo7I/Zkv4j2y0HF6PHDsfocV/hCxhvrMRx+Ko4Wjhf2VlhyRp+5yGk4lOqa5Hcz0tV1sIx5uZmUR+XtEhCx283et1h09MFrHHGnA1DZFpOVkUcekID9G7oq+dFS+zMIRBr5AQK1aG/5HDxCb+lWQd8YWILcT1ookNcUXNmKfS7Wcxk/3eFiTzSvNyuThiZFyCi12OrGu2xRBZluSySA5RRAVZIR6xQ9kSpffJkfUoYqP/JFlPeDLiWWaS4XaMpIjO6OLRL2e0nALBpSJmyglXs3iHQjLcoBUrtdxOY0BROZtmPYrYeFl39URiph5G+xdEdLrLIjc3F3muPDgcDuUGRqKhbjH+1ZI5OP5ok0UW8aEhvOQPF/Kke24W4+MTmHMr9o+FipyMMNEtNMqkrraWTKHlyCKL6xvF5GurQf/AALq6u3T7UmMCJiwCa6rXZAkui3cUKisq0NDQIJZTMTxqsWCiczqdqKqsxEpDMBhEFllkEmUlpXCROqVFPGOi0XpKOp325IryigVTehbXLxRBS0KAFswh6yA5hGG2KOLX3JwHNpsVJlO0OObxeLAYWKwWWMwWnDl7Dl6vD+mC1WJBS0tzjJ5WVlKC6empKH0uWSQkukREZbfZDLcHg7JoQKfTgZUEaW4wvCw7KxAx1EQ5dLJYJC72evHkD76J8nwbtt3xQbS/fgzTw20orGvBb196AocPvwxXngt/8rnP4Hc/9iFxjt8fgN1uT7nzauH1+nH41Vfxx3/6BaQTTGyP/M1f48EH3xe1PSc3J7QU0eeSNagsSLzki1ssFoPtMj7xqc/gv3z6j3Hp8lWxbWpqGkePnsDw8IjhtXp6etHX3y8efGJiEhmBdxTmI5+h30Mwv/oHkKbbxOYLF1vxd1/+Kr77vR/jsZ/9QjQSi6c9vX1obb0SeicgEFBE1tGxCTzz7ItiYFF//M78V4EUvoY6YPEybwsEAqFrBXC9Ymw2iFdPtsJ35RVUeIbQduQMJq4ew7s3F+Ji6yt44cXDyHXlwGa14atf+z/o71cGQjnkjOafx+OjfjAV9rMFAty+0LS3cpyyDeF1bmMPWRb5L7c9/9iazn9dLpcgBu6zTNxG0DIYPl69hviWBoOyZGg4SW7wToPLIIKnnn6OXAe5qKmpwTf+/VF87atfxtunTotG+dnjv6QG9aKyvByXr14ltm3F+z9wP15+6RUMDA6jrKwE+SQnf/jDDyLdkAJeYs3FkHY8DPn0P1LPVyJwWNQZHR3GDSQ+/PixnxL3duCZZ57Fjh07MDY2hkf+/m3cf+/deOW11/HZh/4QBQX56OjoxOe/8Je0XISZmWk0b96MoeEhFBTm4+qVdmzb1kLbZ3DhQiuJO2ZMTc9g964dGB4ZwY7t2/Dbp57GrQduwoc++AHxDMMjNCCYTCgqKsRqx8CYB7OToyiQ/bBbnbjSNYSRtg687B7Ak291obm5GXe+63Ya0Frx5NPP4uzZC6isjDbEHT12Ar/5zVP44l//BXr7+vHkk8+gvr4OFRXlJM7NYOOGJjQ21uP0mbPCrrBh/TrDZ+Fv9fu/93H8y79+Azfc0IIWujf3u5o11Tj80ssoIfFw147tYqA/dvwE9b9S7Nu7lwbWUeTk5OA/v/t94sB+JINk3ARaok6a6KJFTWOKPnBgP7q6enH+wgXqyFsEsVVVVaK+rh4Ou03I23n5edh3443Ct8dD1WbqtKUlQySTW1FIHTdjmO2DPPAqcb0pRckgTE5M4F133IbXjhxDy5bNOHHyJEpKS1BKP4/HLYhxcnJKvDsTYX6+8nwbN24gzj2KzZs2CfNxbk4uzp9vJR3GjPfccye+8IW/QnFJMRqoc7jn3IKb7917I9rbO6iTVdJ7FocfiwlupYniC4VJCsKaW4AR8mn1d7ZhyJMLKbcaOcUmlBeO43JHhxjc3G5Ffyssiv3e3B55eYrP10oc8V4a9Fj87OntFe1vNivC2VYiJNYL46lATEw/f/wXgnDOnzuP2dlZ+uxBdHZ2YnxsXEgcT/z6tygpLiLfm5tcAYM4+cabguhYOuP7T09PJ3rdpCNQ9JCGhiYeGZsYenhsbCDmgvHWebmleYt4MD24A89RR1u7tgFrqdMtNVgcMJl0UrNvClLfc5A8nA1P4t+au0gorxbHvvnWaTFajo2PC/FjZmYW1dUV6O3pFx/fTNxqhLhUbW2NiNFj7hig83jUtZNBQDKZqT2C9FHdcDrsqKuroWueoo9ZDDut+3w+YWa+SKIsD0T8YXfv3nldGqG8/iAef/F1mE4+jgLvOMYb3gv3WDs21Rdg1FKAL3zxK6KT8m/Xzh34z+/8m2gHHxEGG0EWo9MxYb7wwov487/8H2m3YH/p4S/idx58IGrb3Nwczpw7GyY6/V/9MoOzyIsKy7+kEN344MOcT6fFQoluuWFIdMyZWcQMzFFL0D4zKcGmtErWWWjQNjFDhOTDGhLxTHOT1PRzsDpy0d03jN+SuFhOKsYHPnAf6XZWcbyq5y5mIOLvPjs7h3/6X/87rIOnA9yX2OhTU1MdtT0e0SVKB1KJzhLag+sb9H5mUqDNtsh6FhnD2oLcyEoe66qKvtrUlI8/+9PPxhzP0kQ6YCOL+v/88iNIN1Ijj/mjUxSiW1RKz2pCltiudyw1/1DdBKnod0m5DK4H/UM1AafnWimNU1lc10i9I7wjFBsegb7zHz8QjO6Tn/gYnnvuRaFXbNiwnqymZlxraydnZy6ZkYvJAieRL8eWkEB/RVYvdnncQ5ZKNhyV0nlWmwXVVUpY3Jmz58k9sFUMgS+99JowwNxy4Gahd7A11EVulUQWS/ZHseGluXmT8CWSnQYNDXXiPfr6B1Bbs0ZYV9m6d+HiJdKt7eKZa9asQUdnt4j46CNz+7atLWIU5uP0ESBZLB/eMdaE7u5uUrD9ouMePXZcOLo3bVxPfrRpoYCvb2rCmTNnhHHoM5/+lPALGUOiDmxGZ1eXuFZvbw+5STrJ5DxExBGAk4iXTdRnzpzHrl3bqfP3kW+vC+fIJ9XW3ommdY14z3vuQiMRUTx0dfXgp+Ss/9vmv8aRI0cRlCX87OePY5wIdu+e3fjRjx4jl8UwbhSulxzyjz6LPWQRffPNt+meO+nZOoWb5he//BURaI0wl//Fn/8ZslgazBcalpT10mh5dVkvJTz51DNw5bpw6603iYgHbhQmODbzq8GrAwMDuEpc79Zbbkogn0vk+L5E3MOK9esb4fV6RSPzX/4VFBQI5/jA4KAgZNXPl5fnEpE35WVlIkyOuV08jJP/cGJ8QjiFZ2hA8Pv8whGfS8/PHI1dGOyz4mdgLsduDqvVIvxffK/CwkLxDHPkL7MQR2ZDRaL7ZZE6hPXy7FkhPSWyYGr7URFZL4uTdRmsfqLLIov0gonu9NmzgrjU8g5GPjojoss6q1YgJGRi0JAhZwO7VwSuO6JTgmJXb06dDDcm5WNIt3vDJlXAiY3IIj2I1PiRwp65ZNN8UsynS7Q3EnetjKiyZjldkKKqXBgl5bCVbnWLlzkoxm3IYmUjWX9gWgsT6Tv7ROAY+nw/xlLCbqpAo+0vkUUWy4swr0MyEkraxEu/PJkhXSTBPYNkGUQwqfuqXPq6j3hbxVClIuk6jxxKI5XEFyNHhrzC6cyYnQmIQ2en/XDPBcOnhkVXGZFkRWp8Pi7xXYNIJirg5VeO4PWjxwW7H5+YJJP+UDjiXUl8hDC5j42N07opap923Ufme3Y5+AOB8LYsFgdZ9qPf91O0eb6Cfv/3MOj/BQLyrNjHydD8bSbIjRJJbA3gDfJJcvqOEmkEUR6Pv40aLZRsxBBbIY8dPxleHxkdw4mTb4k+yAm0SsJsem0ES2JIefrH3dh3qAxrW/Lwk39vx659Jbh0YRIFhVZsbCnAm8dGyX9lR4BetLHZhfNvTMDrCZIPzYzSCju23lSU4Orzt65SizOIK5fbsPfG3aKo6MQ4ER45tDn1hvfn5+WJnDlOquSkWrd7Tvi7+ANzzY3JyUn4yA/Hafo5zhzh4+OoFD853NnJ/k7ygyUsBrwAzAXbMO6nARE+rM35PF3WhDEvrU+00DeZwGM/exw5ObnCX7lxfROKigtFKbzu7j6RlMo+SQ5W4BzG4qJi9Pb1wmK2oqSkCDftvxE9PX2iRERBPvtjtTPwAOcvtIoMds4Dra2tFom1rx05inG6b//ggLg23+O9996NdGFJiO7+T9Qhv8AqKus+8LFajI54sWN/MeZmA8grtmDPrcXwu2V4A0FUVDnhPGBB+9Vp2M0mlFQ6khWV44JHQ842ZgMLJyayg5kzi/NCyazFxcUiP66uvkZke3NpicKieiJ8L6ap0V0uE9atbRBObU54ZEf39PQszGS0uXatPW4JgOsNiSpeqWUSFgKrVAUziKjkKQx6nqFPbUa+tAtBp0PU4rl5/z5x/aGhYeKAQfH9Wpo3izQt3j9Ig2RRURF9JyeGOLl44wZUVVUJLsbPVF2tVq3TVxCXiENOimtMTnGpkGrcuGcnDcy7RCjd5NS0SD9Kt2EuJee4dtsWco47Nc7xEf+zGPY/g6WECQ40Of6Wmo7HDoUqs87xzEDWyP/qorZfROr8a8+Jr0NHF/GB4HIBeUasm8i5YTbZY0REKTwDiByjo0ei/bX3lHTnS7rrIKqvpDJoKM7xM3GTWI0c5Wl3jlukAnpo5hyRUJiM6MNh/win9ucA17nSvRKg7YuKfjWJH/7op+jp7VlV2RZMYLfeegB33HarEkkSKiK11Hp5ikRn5BlTkG/ejTzndgRlD5k2ZmjU4jhAb5TPbnGQlP8kYveSnQQQJ/1lojMhS3iZhvINVQJ7+O++gueffxGrET9//Al89Z++jHvuepdYXw5DWNo4nWLmNQuCkGT+GyB7BXO+dDvHTcqPiE9Zjm40pVRbclWcskgO2nKC7R2dePrpZw1LMK4GMJE9ToTH3I4DwRdqgU62UpgR0thyklCA+V9ZUtPv08XlIveI3EsKrUc3mBKRkp70/yxi9baAP5C8XBFHqVtoFa1UwAYxv6b2ivZ+nMrFoiYTnarTpfo8ixl0UjwzGQIyZYW96xBq5r3W2MBJs3ffdSeOnzghEmWrq6uEKZ8NbGaLGQ319Xj11deoc1uE1ffgLQfIWjguLIUlxSXoJp3w2LETyATq6upwta1NENP27dvJBTCGjs5OGL3XUouYKZr5suT0zoTxYMuchEsX3nHH7dTJa1FWWiImlWEuYCJz/gi5Xu67/z7cSsTW2dEhCgfNktVv08ZNoqDr6MgYMoVRIjKVmK5evUpicUfU/nSW70gVaa8GxpdSLEIrx2zPDu6Ozi5R5oAd3eyHq6+vxUoFJ77m5+fFbGdHrZMc82yu5urHTeu4ujFHS0jh4jjhYPA0jo/R1svISn9/v8ho587NpS5GRkYTduRvPfodsf+5519YlF8vGTBHVcG+2WhuFuv2YBhxPE4Qzg3PW5AepFgNLPFxTGwPP/IPYi6Ab3/z67jW3oF+6hwer5ucldUiIqCysgJLDZbdOYrk2LE3sGHDBphI3Dl+4i1sWL8WhYUFWEngTsAf2ojoJqdm8MqrR7Fjx3YxkBw5ekw4bz1uD4lzFjgcNvh8AXLe52Lzpg1IJyKcQTbcF2+uCv1xRsvLAzksWiYypnDkUWaILmnEdxkwuMru/v17RY0PfiEufyCRovqrXz8lRA4uhf3x3/3IsuS7cXgXlzbgSJSJyUkShZpFcaDl//jR4I9fXGwc9lZcXIgDN+8TollFeYkY5Dhe9Fp7u+B6XC4iyMSRnaMvZcTT7VhkTjfSakjh0JnGhnohxvHz79+3RzDRfXv3hF4KWM4EU5WrFRYof1dqaUEOczLcTjqRdooytrzl5DixhUOiEpyXacStqg3JsDOrAcRG50QiTaLP5WBmi8VsSBgcP6taE7X7WRpYbCHbdBXC1SKtnI6xeXMkO1kbGLtSgvEXS2iZ1kVCd0nYXks5WGgNDkbGB57thiuO8eQwPFlMd3ePIKrKikox5wPHqXKGAPu11KnQamhQZrcOT+BitSmFlhjVpIKwbshxsIFgALMkZvNsR1yAiWdH8vq8Qm+cnZ0RM0AxuJ3YkNNFlkkuO+jWTC65Z/cuMfGIgySajvZOw/dSp8NSJiMxagEp7X03rdYO5mJBaqyl+iX/XLHm7vhzNehbPjaeMBI4K0cdF+mcMHqKUMqJbNCRlSMio7SxZU09L7oTxD5LPMtcom3a5zDS3RSXW2zv45lwWAdl9wDP66ZyMTb68LRprEuz8Ud7rgg6J6mIp1TLcTrD201mE1k33SggiYT9gaoDmjlZV1cXeslWUFZaGlMQq+1qG9kNvILIw9ciLsrEWlFeDnPceStC+XsSwmlDRseke5BLm3jJBOf3u7GUCAbNJFYkjvBXG8xEDW82W1eUVTUe/H6PiKpRxSvtRzebbeI9lgp6jmCxRHf4kdFR8dODDRBTcaaaYuss//RgLhkP6rUuXb6sez46ryf2PH5WnnfOENQHbLZcIZKqUSlis8GgEggQMQd8cXW+hSBtfjqV81y+0o5r1xRWziPa6GjEF8OKPoNHpakppdEX8yLz6Yda7rVaCI7BA4lRu0iSeUkJTot43HO1Y7734kFOCkVYpev902pIYZZ+/PhJkd/051/4HMnXPvz6N8+SSFBMg4uE4aER/P4nPorjx97E1MycqKPEuU7btjYj3Yj2LZlWDcFFwM8b0PmRsilLy4PIAJgOjpdmnU4W2bs1tTVimYltS/NGxfJEinNT01ry5wyhq7ubFO1S4nweoWhnBlodLXawGBmfxvlL7Zh2k94wc4bkl9cR9E1hqKcdYwM9yCg4IJvuJX7e0C8mSFtvvIh9D7/HjzePvYVLpy7C5/Wj/UonJsamMTs9gcHudrhnp/FOwGI5EOuOrDeqVbpjyzOkl8unzXrJXM7vl/Geu++AYipWHnzP7m3ip8XHPvo74u/OHTdgMUhuxIk9ZnzGj29841u4qZA65dZcVASewMmzU6i/4a/wxG9eRlNDA248+C7UbFjc88WFm0Tujoskfw8BczNCx8CO2wFXVdRh0caR2Muc/NWr+MjnP4Xb9t6G++/7IFxTJ1G4dhuGxntx8q1TuOfOd2PrLXfB7rw+Sklwhj9bOvXfnV1AHEzQpdMJ+Tiebprnk4gHxao6IbL/3W7FJsEGIfaFZiomM22cTtE32E9kFpeVJEtGf4phZP4yCUaWuCMXRxDouYDRviFsKDqFf/7WIHq692B4YBrlwSkExvrQd+1SZnWYogrqLURkve3kYMtVCC/muRWoIV7abe6JGcxeHUFLTQM2b2rC1YuXMNHbBXNgEtLcJJpz/ejt6sBIXxeuF5jiEAHnbM7MzsZsZ0NJMik4TFw8yQr79fj4WBFSTqtOm9akKCaElVUpwdiEb5FI3C0oxsDAZRIryuCZ9pN1zAsL+YzcsgXVJSWw2u0ZG+ngKAZsJFaX1gCN25XnNOkHEK0egVCoUmSvyUptbQvirvs/gtpKB1470kd/zaz5Q7I7Men2oZnM5Ta7E9cLhg24HMPIEspgkXFoaAiJwITJBagY6rX1TvtYl87ikFai44ea4GDdkJ6mjgzqw6bT7JrkE8FIHL65uQJzA3sgdTpxVX439j6wGzVV5fDAgWBhDbyF67B2+83IGDjfzzQfMRj51CLLthw7Nt1nwcVHv0bPvhP3f/jT8I8VonLLFrS+dBKOxh2QC+tQUrVyA7tXCoyiWbSI1GFJT/9Nq/WSA52/+a3/EFNEPfiB+3H23DlR3qyRdCROAbHSy5WWlohyaVyFadPGJmzcmHxg7tCQEp1QWJiPVKBvp1yHBe+75/2kML9PjGotLXuVoCU68Obb7ghFMK2QEBoN9I9U2fR+PPT39yn7SMqQ5duFhfOjDVuXYYDLIlmkV7ykD75r53Yl4pw+uN3mEHlWr7x2BEXEwnl20c2bNwufHmfvtnd2p0R0HO3Nv3TJ1mExQtIWfchQQaVFQhsxooWkibbQuhSWmuAUETh2O+tIRlnWiQaFeBXdEm2PlymQzODDxySuIJc4EyFVWOI9xELAkfzvvfeesPGimdwF/KBbmjeJUKHbDt0iOJ2qlKZaKo+De1N7tkRhWasNK5drOZ1O5JK1b3gkNr3n7rvuwrPPPRfTYW/cs1sETnB2txYcIcIxkydOvhFzrc999iF8+9HvwEu6mhbr1jYK6+PF1ktR20tLSwXRF+TnG2aNq9AHVxtBryotBpZED2GwB/OJmNooEW14DVdAVqsgp3PUSAzlefW3GhwcFJ3krbdPkam5QEyLvG7dWlFYNkAfiWdm5aiZytAUyOfOnUdRcZHoXMyxOUGSzcw8TznPrrq1pQWZhlIyLrLOgb2tra3CjM6xiOxf4rw6HtRYiuDnqigvE7GMvI1jJDlKnzO3Od4xL1TRmkspcBvxoMimctbHueQCc02rzUrnBULFnpRK1z09vTHPxpY/p8NYRx0aHjTs0F1d3Zhzz8UczxZEloiM8OJLL8FnYI3s7x8QJn49OP6TB3ajwWA58Q6ZFDL6gz//wotiZCwlK6XP58WJN97A+QsXyJo5KDpxHvl8mDA/+YnfEx2YpyN+/sUXUV5eIaZLZr2ylUbVP/7cZ3H82IklITqGdhzs6enB9NS0KBl+rf2aYuqm/7a23CCIbGJiHGfPnoXNZheDCg8YXC5hjLnLtWv4o4c+jSd+/Rth4buHuNFvfvsk8gvyRQ7krh070UbX5DaanpoS0f+DRDwtW1pEtrhZJy4yQY2OjRo+86lTZwwlGibseIgXs9mq42QquP7KnDs27pcz7NODFRrwbIhI0LzGAqTZLS2N6Kfn2h/+0AfFiKpyQs7EFiKLrHBq7mxMhNxR+XfzTftx0/59SiQ7dW47cZY7br9NdOI773wXMoPEksC6tWtRW1MrchjZqcucyWw2ibolXAmL9SjWdQKhilgstnGyK3PFD5d9UKz/wSd/X3BI3nbfe++lQaVMcDUW4w8GbxH7uC2Yw/HgxO/rIp2a28CcwRJ8S9UvVCSj06UTac+n08J/aRqB02Owf6AWrZev0Cg6LBycbAzh2vM8W8r2bS0i+7myqgLlZaVYCnAD6xvZoZuPoIVM71rwaC6OCR1nCSU3MtfLJFRR30jcZ4Jj8D4u1SCeS0MM+vdkQtVDTZNhg5cWfB7v42tbrRZB0EzEwQxmpTtyzHjw47XYuL0QJ18ewS9/2LUkRuRkdLqMG1LiI7Xhx1xGHXRzgaBVHiULSXzpIrGISyacPnNebOvpJd2DdCeeHGKpiM7vlTE5EBTPJQflKD+iCptTQl6ZGcERH+SZIIxmlBXnmWSYK+k9zZnpHfEMR21kgOAaNLt27sC//Ou/YeOGDUKs5NlmGtc1CtGT13t7e3Ho4EFkEkbtp66rFkd9hzUyTHz4D+vxwCfqxHLLngK0X57G6TfGwsfJoVIUUgqWzXS4TrQ5h8vgp0sNUqEVlkJlNG6oVxrzhhuUjIKWls1YLoz3BnDueDvcc2QcmPOTuMQfM4CC0jwiLT+mRj3YdXADHFYyMFyZwIvfPorGHXUIspGI/rfYzDBZTPBOelB7QxWKHaUwl2Se42nFHI6iaGyAmE/vIyQus3jJgeRMcEF/AD19vejo6MC77rgdmQZnj/PgNTg0FNUpq6urRSkJFtF/RfqjFlyLMt+Vg5dfPaIQFG1buzkPV89zrp0XDY0u3HJ3eZjo2FBy8OAt9E5dZNg6F3Utrr2zedMm/Oixx6IqfrP1kmdaYoJko8pCoc5fuEycLjXxcqVA31a2HAl166pEuOPctBszU6SvOMnK1TuFHJeDDAo5sDpIL3LRz2bB/g/tICueDFdZruhc0yMzKKoqhHt8FnaXHZItE7FvctTIqo8hZYMP/7RobGwIL2/YsN7QordYGHU8DkLmTBI9p+nr7yN1wtig0dPTja6gokuJ9+RtHbO4+d1lKK92iK526kQkF5PzL0+QOuLz+2Ku1Xatne7hDgU1RLbPkEGGrbzp8OumM9ggRT/d6nR46V8nv9wMO/v8hHoSMXWv31UW/ma2HBKJqHVcLfnImYsuh5e3Xils5KjPgWSn4+yZES2NplvSgtUrfzD2m5D6FSY4FqUTwWJL7dmN+kYgEGd6MlmJUjKCUcm+x77Zgfp1udi8owDPP96PV54aEHmYDL7+0PCw4bU4WfrylSsxbWRk0YyHxASV3uietPvptCCjl+AypIeHZjw1CaU8o9H7UYjUwNDD7kqSO1nJGLE8ydoJQYwFXaN+tHWPiCRdG3HbXDKmuL0BEtucaCgnH9u4jGvnh1FY5BJWzMnROfEJ2dhioffy+wKoqClEeZMFKyE/dmzEiy9++m1hQTWTjqwSXKaRbNQKY8XrdMffDOJXTwfwj39jJYfnZYyQ/uEmRypPXzs768b69WvF1LKZw+oUhxmqHqFCP04JDkec7u2L3chxKKOCmUaH0clJNKwhS3BBLUxzMtwzHrx1boB0UFmIzh6Pj8S3fFx8rQeufCdKKgoUY9ISdfD5wH3abF7aZ5nfeillntOlC+vXSnjvu02iIdlNUFhUKCIRlPJpsph0IrNIVEhpZQcE66UB/aM6SSzMJT30Q3duY+FHDC+jEzPIsTeS4cKKYuLkAfJqrN9WjQ1bqwVRqfGRXBR4TWMJnLkOOFwSEeTi2oHbkf1+6vzt+ndQfH3eqHPYHcHH6vU9LgjM/cPIEsr7WFpy68RGlp54u/4eJnom4VOkv/O5OpLpC6vCZVBRJtFP8WetXdsg/tbWZJKz6aFwOj2X4Lg+Dl2qr6tDfn6+6IhsBWQnMPu7PPTXFApdY0Wct9fX1QoXx2XyN3LkBodcsXJfXl5OfydFJ+IPa7c7hAskPc+eGBUFLBNG5MK6Ul32BamizjyjT8zfJH0DHpfF45qXl69cFe2qQgks2CesiD/+yU+jztlEhh7O6v7tU09H6YN1tbVkDS3Dy6+8GlXolUPU9uzejeGRIZw9ez68nYmxeXOzqJfJkUZawsil+1dUVmBqcgoDg4MJ32HZYy/j4/qwXjJBbaSPzgTFo6SFHNz22TlRZn16ZlbELHLBUy5RzoTGIzU7wZmomEh5/gCeDoorKrOD2pWXh4nxCeRq4kvT8cz6wWKlMmaeIYcjYfRciwmw9dJlnNEQCYM7sJc4UFt7e4wBhiNduMalfjtXtp6cnMA4tbMWTATM+ThdTE8QHDvKBWh9Og64EKwa8XL5YTxA7CSHMhsWtNEba3S6pZpNrAeP6EbHVFakd2KUpTM2LR4c9zlqUPuSCceoliV34PPnLxhe68KFi+FjtGDC5p8RWi8Zx2Rqyz/Oh6XicoyMEp3Xr5S4tlnswnzLMj+nWUTEvkx3LGPxkhtvNU7fq38Pzn6Q6RVbmpsxODgkJh7h9+IAbXW+hkkyrHDlYyYMq6Y0gSdUflzoYUQcnHWhhnlxwjG7ASzke2Aun5t7fRQ2SoTkdHydI3CByKhO1z1+DWd6T+D+Gz4uIgnGSW+ykPGEjSm5uU5Rfm/H9q0xZbLTDUlSUlNWy7TISnpUrCFBC5FeRAQliKcZwml84uRJbNq0SXCXc2fPifhWPotFYCZKJb3KJfxafAzX7+e5BCxmC4mHfsEZtmxpFoTK4AHSZlueSUlWCpRvoRphVgGnqy6sR3FOGZRJA0vgnnMLK1oNG1M4spsU5RnSpTJJdKo52Oeb01R5XsmimyTKqjONKZNaGIs23GZqQjAjL2RoYHDoFRMlczyeGZXPXVNdHSqLrnA7BxkZpNB1mdOx3sOGJT6muqpKcEC+NnO8qJhug37H+i3rdAGRexexEjKX5PkI+btrDRl8z9rQJCKc+aB9N3bqs27NxYZ8mmRV8b7Uh1hiGtHkx/G5XA6E05faOzqTEwHloCiVzoMx+ziDQTUzHDHfgsuqq5np6UJGDSkOi1P8GFx4ln9LhWgHv9JgSmfWi5uqyGD0F5rzjbbHvbtuXdZt14spyrqSqCohGb8Qd8IN69eH1/Pzoy2XRmFiUefrsiqsOnHbGZrYIybDweD1a4lYR0dHhKlfLZfPYDcRW33ZpaElOr5eAYm//A76aYk3bdwQCoTvFRKRCubQHEfaevkSXn89QnRMEGVlJVjftJ4I+PtJEp1Mz8ol9yxiYFOMNirRSZrk68i6NiF7schsPt0yI+L0hGEZtcgEHdBwQKXTqwGukWOkqJzAaIeqHDpHm6UeTfTRx0eIVzlES2TxCW6l2lauXbsWkiai/XTshnn99WOw6Qicj+EkVnXqLC3Onz8PJ5d+GB6Jchlwlvv3f/BDwT311zpz5hzePnU6+fIfUoSQlO+ur4Gifs/MWIzfES4DlUiUGWeS+TB6rpfs8fNtS679WKRRy15EDxJ+sX2lzWmgioFG6TtcXkFfYoG3cyqXEdzELfmnn4yRRVdOxzUq1zCbcoY46bJWB/UHazjn0GgwZgSDPtHmC6npEw8Z5XSSl3wqQRLpHOWipgh3ftYn/H6fqNfB6yyOcL0Ocbykhj7p77P4ifm4GrRSD2TlgzucxxOdiqKKeR7PdBTRpZ/7xYq+6r2547NufD1AqRBuCRNcPPFRibThCBg5SQvn/EhrNbAYjJyEqfOXCNz4f0mmH8boiFL9qb9vAC0tW8iIMo2tW1vw2pHjwtzNDcA5WZyAyeteGvF47rNtZOHcdsOWlG+vNUKsFoJTIIlOIcuRiS8jKT7QGCvklIhOEbMj+qPWpRItgkMX96lYf9mostT+w2QDkVO8KPQZHIniLtngEwzOX549WWQ0y0CuOIBg4RbxkjVr1sBMRFW9pkqYudnaxhEMDfW1QqHmokA8gnOyK8dkskuBoxCmpmeFQp4q5pt8Q9mB8KAuhyMYlwZ6A0WyoovaQVSJIEIgsma7eqz2fup9tOt8jllY8WLvo/yCQTm0bAqdG8sJkh39+ThhCaTlYAJxjS2sHo8b7/lgPXYeKKR+E7q+7jZjgz78xz9fxeS4NyHh8Ha9ZVXdbtTXjcqqR3T7xXO7zBpSTHbITiWCIyfHgXXrGg0P40yDeNkGbBZfDNSRXQvPjBtf/qu/wxNPPY3v/L9voLPnEnKsZlRvrEdP2xkhAm/acyvyS9IRQxkL1oE4REqZ6UhJ/mSLndOpLWOnJq1K4fdQOLZdjLxLxXHU+6hFjlgXUsHhcB56l6Z1a0WdG34nHkA9ZNZnayP7DvkcjlPlkCw2joigBFkWxMquAS6ByOdx6T8uyT9Hyzwor6nNx6f/+1p0tU8ria5+GZMjPuTkWkm3C6KwyIqtewowMxUQhKfWsOFKblbS1SxWC11rThScYr+jIrJ7oHfBcPvz/TnMjwOmRdoT/aITgNPb1imKl6vTkKJH5/HL6L/aia0banChg6xoF47g5n2bMdHvxdmjr0ByOGGjzrP90HuRCXAH5g/MHZJ1Xf7gHDitheraUAdVZVQ2hx386dAtUkWMoQRKj/D7/KI+ZnV1lVge8ig6EL9nARFVTpVTzCHORMcEFAxFyHDnHhsfQ1lxiYh/5Ro5rE54RkahMiXJL4FaijoqZxFQe036OcURg71u7K8qFRn9ssKKRDs67A5xXUHI5Ebh+7EPb4pUFqN+reqqXM6Bf/yOXGZCz9G00sRikaJ4uVoJLvq5Z0ensLdlN6ZcFhJNZjA57SVHvV1YqWx07JqKUpESkilw52BOwG2sGpGMIj+0RiVJMi7tvVQcz+j+zLH5XXpD87+x01p9GtbLeVkb/8jmfj+dw6IlEwYTAoPP52M5WIKJl9WKnq5J/ODrHbjl3eWwhaYfLqvMjRJa3nxtEr/4fqcIc+PqbJNklONf2O7MvkEmngSiu8rVRCHhoiKxjb+Fvp3TOcZl1LrAxgC/n1P5FQWco/o5wp8/FNfU4JQZm80iPkamfCIMfb9s2N+Io0f/DLNjTmzedx+6AjXwkfgrWXLQtH0HiirrUVTdgEyBR99oUdIY0e0RS1ycyNo67oHNbEKjbRQYfhqSi5zEAxVoPduKg4cOwFWa2mQrRlBHfeF2oW+nrXmp983Nd52E54UGOl/I3/mTb7fhsUevJbpi+Nv65oka0d5bQuR9tN8ivn80fZZLRkb9dBxew1V5m5vXY5hEhu6uXlFKu7SkDBUVJTh9+pyIxfTQthLS3USFsCUYuQtIDPq9v/kx3OPnafkgyf4+ERpkd+aTdbWDRCIXqqqXMu9vfoQkqCg89vopfO9rX8I9H/84PlryDXz7sUHcectefPWbIzjTdRF/8eCf4P3/7SPIKyvAYqCVfDjfjSd90VZbXii3Tea8VK6dzLH8Ljfvv2lBPrdVkcQqSUFs2bJRmJvtpEivX79OiBtsKeQsYJ5gRDUKcF5bpgjOqK1y8teJH8OlYQabNiU/i9DSI9I+074gXj91Dg/sWIO7Si7ifOsA1ueRXjq8BzUlb9K7kURBuszgpe5FEx1D7XAspXztq/+If/n6v4k5BLTPFXJGRFtNjeqFLqGVWAsz9bWt227AH/3RQ8pzpGB1jUQcZUinS3B7pOQyID+TSkeq7sKuABXFxe/sCPZEiISnGevXNrOEln0H4HijH72do+jon0M3Tz1WMIQtG6tJ7MxFbW0RnAWLK8Onvb/KHRrq6/GVf/j78HTBjIh11Rxe577CMY5anyC7IJxOV1RYXmypwdh7q+taGBGB1jqp3a+Kk6qLQ8/pEhOT8i7pigS67icQMfowauqKOhCwJVFVnvl4dWYbFZwKwzller8OL6tWON7Gx7FSzh92saOitqqwCu31bOS7OlhXgo6pnUDXSWze+hAC176LSvt5lKwzo3jiKjYc3IiypgakE9rOyx1XfXfjd+D8PEvUc7PlkgMV1G1sMeT21yYEq/t47ghu3xyNzqV+C0YfGWC0lsZ4fxkin9BqjYpAMTJMxXnr0PusggrPKwFGjfTc8y+ImhoccMv+JS49vpZ8TTxJyAsvvCjk0braOsGVlcxnGWNjE0IkZkPQ6Pg49u7Zg5GxMWFt4xlreO4D1nO4zENBYQGmiLB5opJFPHnUmt6ZzthY6sLGg7fR0iFx/K4HPq+TpdMnxmk5hvo8Rn+jn1mKiaHk07UO9fb2DrjycnH67DnYiSg4v09wT7Zwkspxra0dJotZVHEuLioWlaLr62tx0003iZoopeRmsJFdoHmzks7U0dkBjq9ln52D/ICcic41V/gbOp05ZDdoFnppotCvWCyrn24+KIYTdoLzCKiNnFhJ4BQR/tg304fr7e0TnE8NML7lwM1CbOLcrPKyOmG+VhylkjiOA27XMuERwfHHY245TsucRpNDH5U7jBiNF10rJbrNEncM1ZmXmUBovZinVmXWchR1m/YcNqRFxDg15EyKmthk46aNuHTpsohEGiE/Hpv3OR+QuR8TIIuybOU+dvw4EUwL7rj9kHALcKb7vfe+R8yXV1OzRqQmcSLujh07hHOereac8tO0bp2IfMrJzRFEqT5bKuBnXsh58SAND09+cmp67NHBoW7djeSYZS0BbWneIpIXteD5xV97/ZjgBu9/4D7R+b7+r9/CoUO3iGgATqq8+847MloqQZ1IQjsC86LD4cJqgtc7C+0Em7KI4rCRiGTHciEeV4sndvHzK4Hb2rQorpjmgjbdyQjxdD29eK/fN98zxfrf5ickDnhWYy9VDsmEfPrsmRhuacQ91eXKiga4cvPfb/GZA4dzcqJ9OXLCYMX44CxhTv3nGvJsROFyDGyV5GRE/nHWeHAZmJ5Ru45PByHrtvNqroOsfmSkcNP+oC/+NXmqb0deJlNsjDpDpPE4V42jN9gpnJ+fJyYPYbGNJ4EsFk5eWXAIiA4yK9JYWDzmAkJlpWVChx0YHFBqo9D35lqYHMXBJRpYLGu/1i44C1c8Cz+RFD+20UiPAoz0JpMwSGg55LiYFUn/9rKo7Wm3SlH30D6HkbFEa/QxIsb53sUIWqPPYmC3OUD09ralqqiofWh48nCeq+gQcbzwxRcW8CzjgffdQ3qSVzQsX+Pz//Vz4npcq3DLlqWdqSfe4NEzGsC5tgH0DE5jU2MFRiZmUJjvgJ/M8GsqClGXZ8al46Nwz7pRVlmAvu4JuFx2EiNnRZHW2WkPJKLYxm2FyC3OFOElFi/ZAMHTZbHRZ5aWWazlQY7LHDQ1NYnwqknSWUXOGA0iPAPrbYcOobOzC6+8/Cp27topaqwMDQ2KGEUup8EZHrVraoiYRzBHksm2bVsNn8zIYqiKi1ruI0mIITr99qHJAM5cGcHFjiFsI6trV98YKsnF4fX6UV9djPWV1nCQthFxJ+JcaRMHJRnaoOeFIC+viH3Sh8uK8tsVOU+WvlRSUnVozs0fz7sInU4ZFbSjo7JNXnKCY8QbPPx+6iRcEdgXwLHTbeCYxvJiJwKyCZWlBeCMGq71b3fYMNg/jpmpOQx2j2PNuiK0nurG3KQbheX5qNuyeP9XgqdPuJf1GP6NjIwKo1A8K6d+tG9qWhfVcec7PqknjcNJZHn+axCDFfGaNjKWnLvcCzd9k8GRCRGgUFNZHPde6SKo5CBFDSypgge+4sIK+M2BTylXC2FoaOIRf8D3cG/ftRjCS1anWwkw0ukYih6hgAZRDE/6o3iJmzY6bBYU5JjgcpgwNRyE3xMSe0Ihalzz3+cNwOqwiNGXZ/8xZajuvqrTqeFx/JcLKy2nTpcqVJ1OT9T8LdRtRGPE7fzQjo1ekjhsVp4QxYTCnOXPkvd63eCsfUaqOh2nqa2pWkfqiPVLFWUFj/C2sEWjjDYQ4aG6qvHhsbFBshCNYvXDmGMTbaG6WG/MiV7PK40uWR7BUk3ho348aP5Gv8/gZBCdA1MoZge4jLD0zx+8qpj0O9Mk5qY7YXfmQSnzYMz5o3Qhs4uIOzMpTeINQk5z9f2s5FGoLlrZnitVvEyVu+aTSFlauoatymGCE9fTH9g3NtZgCZgfJW53iBMJPd45aIchdamcfB8rsWBrWO4OPagahmQxr67oF05HkRGddGnSpPYwh5h2B3H+aj88JJ7l2K2oLC/A0NgMqkoKUJRnhdM6QaLxKCZHeuEq5KmlZSJC0k8LyjAx2ofc/GL4PHPwkondkZsPz8w4Kuo3E9GxWLd4DsNtz+8RNViwFdZiW7ZQsIUgEAzVpgm7ZhRnOyde83L4TTTczZVbwN/qMKtuZWV5h7XXi/vmTHzWgHk7deLtyCKLLJIGDfrtPp/1cFWVs91o//8HUcaDzu2ZYE8AAAAASUVORK5CYII=",
          mimeType: "image/png",
          name: "Rectangle 1.png",
          createdAt: "2024-06-10T20:06:44.820Z",
        },
      ],
      stageID: "80bca974-624b-4325-afdc-c3d7f992c3a4",
      projectID: "5eb8e255-ac5c-436c-8bab-7a35e8b55644",
      tags: [
        "7aad4bcf-e6b5-48cb-a1a2-6433aa96d085",
        "e4a25fa0-6b9c-44e9-b2b4-b603a9cce20e",
      ],
      dueDate: {
        start: "2024-06-01",
        end: "2024-06-05",
      },
    },
    {
      id: "9a9b6284-0a48-4c22-a172-89a68a977e3d",
      title: "Create Wireframes",
      description:
        "Design wireframes for the website's layout and user interface.",
      attachments: [],
      stageID: "d4ed5765-9a16-4b32-abbe-853d278752b6",
      projectID: "5eb8e255-ac5c-436c-8bab-7a35e8b55644",
      tags: ["e4a25fa0-6b9c-44e9-b2b4-b603a9cce20e"],
      dueDate: {
        start: "2024-06-06",
        end: "2024-06-10",
      },
    },
    {
      id: "4c784a9b-64d7-4d43-ae2e-0841587808e1",
      title: "Front-End Development",
      description:
        "Develop the front-end components and user interface of the website.",
      attachments: [],
      stageID: "0fcaed74-8adf-4bb0-98c8-22fca7ca5da8",
      projectID: "5eb8e255-ac5c-436c-8bab-7a35e8b55644",
      tags: ["7aad4bcf-e6b5-48cb-a1a2-6433aa96d085"],
      dueDate: {
        start: "2024-06-11",
        end: "2024-06-15",
      },
    },
    {
      id: "3766f14d-9f57-4183-9bbd-ba5c02f3b8e3",
      title: "Back-End Development",
      description:
        "Develop the back-end functionality and database structure of the website.",
      attachments: [],
      stageID: "0fcaed74-8adf-4bb0-98c8-22fca7ca5da8",
      projectID: "5eb8e255-ac5c-436c-8bab-7a35e8b55644",
      tags: ["690e259d-4976-4680-8650-ac703003fd64"],
      dueDate: {
        start: "2024-06-16",
        end: "2024-06-20",
      },
    },
    {
      id: "c3c54143-9127-4262-8de1-2d1654b7ab67",
      title: "Product Page Development",
      description: "Design and develop product pages for the website.",
      attachments: [],
      stageID: "0fcaed74-8adf-4bb0-98c8-22fca7ca5da8",
      projectID: "5eb8e255-ac5c-436c-8bab-7a35e8b55644",
      tags: ["7aad4bcf-e6b5-48cb-a1a2-6433aa96d085"],
      dueDate: {
        start: "2024-06-21",
        end: "2024-06-25",
      },
    },
    {
      id: "8743b69f-e8d4-4fb1-bf30-c1c79bc74039",
      title: "Database Integration",
      description:
        "Integrate the website with the database to manage product data.",
      attachments: [],
      stageID: "0fcaed74-8adf-4bb0-98c8-22fca7ca5da8",
      projectID: "5eb8e255-ac5c-436c-8bab-7a35e8b55644",
      tags: ["690e259d-4976-4680-8650-ac703003fd64"],
      dueDate: {
        start: "2024-06-26",
        end: "2024-06-30",
      },
    },
    {
      id: "e2dc1e9c-d6ee-4e3e-9b80-6cb70d44e81c",
      title: "User Testing",
      description:
        "Conduct user testing to gather feedback and improve the website's usability.",
      attachments: [],
      stageID: "0fcaed74-8adf-4bb0-98c8-22fca7ca5da8",
      projectID: "5eb8e255-ac5c-436c-8bab-7a35e8b55644",
      tags: ["7aad4bcf-e6b5-48cb-a1a2-6433aa96d085"],
      dueDate: {
        start: "2024-07-01",
        end: "2024-07-05",
      },
    },
    {
      id: "1a2f7fb3-6eb4-4655-8823-d23ae9eb1542",
      title: "Performance Optimization",
      description:
        "Optimize the website's performance for faster loading times.",
      attachments: [],
      stageID: "0fcaed74-8adf-4bb0-98c8-22fca7ca5da8",
      projectID: "5eb8e255-ac5c-436c-8bab-7a35e8b55644",
      tags: ["7aad4bcf-e6b5-48cb-a1a2-6433aa96d085"],
      dueDate: {
        start: "2024-07-06",
        end: "2024-07-10",
      },
    },
  ],
};
