var students = new Vue({
  el: '#students',
  data: {
    title: 'STUDENT WORK',
    subTitle: 'CTE WEB DESIGN PATHWAY PROGRAM',
    students: [
      {
        id:41,
        href:`img/carousel/birds.jpg`,
        firstName:`Maritza`,
        lastName:'Alamo',
        course:'awd'
      },
      {
        id:1,
        href:`img/carousel/birds.jpg`,
        firstName:`Genesis`,
        lastName:'Amador',
        course:'hwd'
      },
      {
        id:2,
        href:`img/carousel/birds.jpg`,
        firstName:`Andrew`,
        lastName:'Bacile',
        course:'hwd'
      },
      {
        id:42,
        href:`img/carousel/birds.jpg`,
        firstName:`Jose`,
        lastName:'Beltran Valeriano',
        course:'awd'
      },
      {
        id:43,
        href:`img/carousel/birds.jpg`,
        firstName:`Kaitlyn`,
        lastName:'Bingham',
        course:'awd'
      },
      {
        id:3,
        href:`img/carousel/birds.jpg`,
        firstName:`Atticus`,
        lastName:'Bowie',
        course:'hwd'
      },
      {
        id:4,
        href:`img/carousel/birds.jpg`,
        firstName:`Michael`,
        lastName:'Byrnes',
        course:'hwd'
      },
      {
        id:5,
        href:`img/carousel/birds.jpg`,
        firstName:`Joseph`,
        lastName:'Caleo',
        course:'hwd'
      },
      {
        id:44,
        href:`img/carousel/birds.jpg`,
        firstName:`David`,
        lastName:'Camuzo',
        course:'awd'
      },
      {
        id:6,
        href:`img/carousel/birds.jpg`,
        firstName:`Christopher`,
        lastName:'Catalano',
        course:'hwd'
      },
      {
        id:7,
        href:`img/carousel/birds.jpg`,
        firstName:`David`,
        lastName:'Cimino',
        course:'hwd'
      },
      {
        id:8,
        href:`img/carousel/birds.jpg`,
        firstName:`Marjuly`,
        lastName:'Cruz',
        course:'hwd'
      },
      {
        id:9,
        href:`img/carousel/birds.jpg`,
        firstName:`Joshua`,
        lastName:'Cruz-Morales',
        course:'hwd'
      },
      {
        id:10,
        href:`img/carousel/birds.jpg`,
        firstName:`Jonathan`,
        lastName:'Davis',
        course:'hwd'
      },
      {
        id:45,
        href:`img/carousel/birds.jpg`,
        firstName:`Kristin-Rose`,
        lastName:'Cuison',
        course:'awd'
      },
      {
        id:11,
        href:`img/carousel/birds.jpg`,
        firstName:`Zamere`,
        lastName:'Desai',
        course:'hwd'
      },
      {
        id:46,
        href:`img/carousel/birds.jpg`,
        firstName:`Joel`,
        lastName:'Eapen',
        course:'awd'
      },
      {
        id:12,
        href:`img/carousel/birds.jpg`,
        firstName:`Thomas`,
        lastName:'Fredericks',
        course:'hwd'
      },
      {
        id:13,
        href:`img/carousel/birds.jpg`,
        firstName:`Steve`,
        lastName:'Goncalves',
        course:'hwd'
      },
      {
        id:47,
        href:`img/carousel/birds.jpg`,
        firstName:`Chris`,
        lastName:'Gonzalez-Magana',
        course:'awd'
      },
      {
        id:14,
        href:`img/carousel/birds.jpg`,
        firstName:`Stephanie`,
        lastName:'Gonzalez-Morales',
        course:'hwd'
      },
      {
        id:15,
        href:`img/carousel/birds.jpg`,
        firstName:`Domingo`,
        lastName:'Hernandez',
        course:'hwd'
      },
      {
        id:16,
        href:`img/carousel/birds.jpg`,
        firstName:`Venus`,
        lastName:'Hugo Williams',
        course:'hwd'
      },
      {
        id:48,
        href:`img/carousel/birds.jpg`,
        firstName:`Alejandro`,
        lastName:'Huitzil-Romero',
        course:'awd'
      },
      {
        id:17,
        href:`img/carousel/birds.jpg`,
        firstName:`Kayden`,
        lastName:'Hutchinson',
        course:'hwd'
      },
      {
        id:18,
        href:`img/carousel/birds.jpg`,
        firstName:`Patrick`,
        lastName:'Jensen',
        course:'hwd'
      },
      {
        id:19,
        href:`img/carousel/birds.jpg`,
        firstName:`Jack`,
        lastName:'Kesil',
        course:'hwd'
      },
      {
        id:20,
        href:`img/carousel/birds.jpg`,
        firstName:`Gabriella`,
        lastName:'Kulick',
        course:'hwd'
      },
      {
        id:49,
        href:`img/carousel/birds.jpg`,
        firstName:`Mike`,
        lastName:'Lazaro',
        course:'awd'
      },
      {
        id:21,
        href:`img/carousel/birds.jpg`,
        firstName:`Jonathan`,
        lastName:'Lopez',
        course:'hwd'
      },
      {
        id:22,
        href:`img/carousel/birds.jpg`,
        firstName:`Anthony`,
        lastName:'Loucel',
        course:'hwd'
      },
      {
        id:23,
        href:`img/carousel/birds.jpg`,
        firstName:`Juan`,
        lastName:'Martinez Zarate',
        course:'hwd'
      },
      {
        id:50,
        href:`img/carousel/birds.jpg`,
        firstName:`Bryan`,
        lastName:'Martinez-Barrales',
        course:'awd'
      },
      {
        id:24,
        href:`img/carousel/birds.jpg`,
        firstName:`Roselyn`,
        lastName:'Mejia Sanchez',
        course:'hwd'
      },
      {
        id:25,
        href:`img/carousel/birds.jpg`,
        firstName:`Zion`,
        lastName:'Miller',
        course:'hwd'
      },
      {
        id:26,
        href:`img/carousel/birds.jpg`,
        firstName:`John`,
        lastName:'Mooney',
        course:'hwd'
      },
      {
        id:27,
        href:`img/carousel/birds.jpg`,
        firstName:`Anthony`,
        lastName:'Morales',
        course:'hwd'
      },
      {
        id:28,
        href:`img/carousel/birds.jpg`,
        firstName:`Kevin`,
        lastName:'Moscoso-Farfan',
        course:'hwd'
      },
      {
        id:29,
        href:`img/carousel/birds.jpg`,
        firstName:`Youssef`,
        lastName:'Mossaad',
        course:'hwd'
      },
      {
        id:51,
        href:`img/carousel/birds.jpg`,
        firstName:`Justin`,
        lastName:'Mykolaitis',
        course:'awd'
      },
      {
        id:30,
        href:`img/carousel/birds.jpg`,
        firstName:`Ervin`,
        lastName:'Ordonez',
        course:'hwd'
      },
      {
        id:31,
        href:`img/carousel/birds.jpg`,
        firstName:`Luis`,
        lastName:'Ortiz',
        course:'hwd'
      },
      {
        id:52,
        href:`img/carousel/birds.jpg`,
        firstName:`Jackson`,
        lastName:'Pavlovich',
        course:'awd'
      },
      {
        id:53,
        href:`img/carousel/birds.jpg`,
        firstName:`Jahvon`,
        lastName:'Peart',
        course:'awd'
      },
      {
        id:32,
        href:`img/carousel/birds.jpg`,
        firstName:`Cody`,
        lastName:'Peterson',
        course:'hwd'
      },
      {
        id:54,
        href:`img/carousel/birds.jpg`,
        firstName:`Lori`,
        lastName:'Purswani',
        course:'awd'
      },
      {
        id:55,
        href:`img/carousel/birds.jpg`,
        firstName:`Luis`,
        lastName:'Racine',
        course:'awd'
      },
      {
        id:33,
        href:`img/carousel/birds.jpg`,
        firstName:`Eleazar`,
        lastName:'Ramos Rodriguez',
        course:'hwd'
      },
      {
        id:34,
        href:`img/carousel/birds.jpg`,
        firstName:`Cristian`,
        lastName:'Rodriguez',
        course:'hwd'
      },
      {
        id:35,
        href:`img/carousel/birds.jpg`,
        firstName:`Hector`,
        lastName:'Rodriguez',
        course:'hwd'
      },
      {
        id:56,
        href:`img/carousel/birds.jpg`,
        firstName:`Joseph`,
        lastName:'Romani',
        course:'awd'
      },
      {
        id:36,
        href:`img/carousel/birds.jpg`,
        firstName:`Liliana`,
        lastName:'Salce',
        course:'hwd'
      },
      {
        id:37,
        href:`img/carousel/birds.jpg`,
        firstName:`Luz`,
        lastName:'Salmoran',
        course:'hwd'
      },
      {
        id:38,
        href:`img/carousel/birds.jpg`,
        firstName:`Tyler`,
        lastName:'Siberon',
        course:'hwd'
      },
      {
        id:57,
        href:`img/carousel/birds.jpg`,
        firstName:`Coltrane`,
        lastName:'Smith',
        course:'awd'
      },
      {
        id:39,
        href:`img/carousel/birds.jpg`,
        firstName:`Joseph`,
        lastName:'Surgent',
        course:'hwd'
      },
      {
        id:40,
        href:`img/carousel/birds.jpg`,
        firstName:`Alina`,
        lastName:'Zaman',
        course:'hwd'
      }
    ]}
})

// FILTER FUNCTIONALITY
      function filterSelection(c,btn) {
        console.log("filtered selection " + c + " " + btn);
        var x, i;
        x = document.getElementsByClassName("student-work");
        if (c == "all")
        {
          c = "";
        }
        for (i = 0; i < x.length; i++) {
          w3RemoveClass(x[i], "flex");
          if(btn && (c == ""))
          {
            RemoveColorClass(x[i], "color-override-green");
            RemoveColorClass(x[i], "color-override-purple");
          }
          if (x[i].id.indexOf(c) > -1)
          {
            w3AddClass(x[i], "flex");
            if(c != "" && btn == true)
            {
              if(c == "awd")
              {
                AddColorClass(x[i], "color-override-green");
              }
              if(c == "hwd")
              {
                AddColorClass(x[i], "color-override-purple");
              }
            }
          }
        }
      }

      function AddColorClass(element, name) {
        console.log("adding color");
        var i, arr1, arr2;
        var el = element.childNodes[0];
        arr1 = el.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {el.className += " " + arr2[i];}
        }
      }

      function RemoveColorClass(element, name) {
        element = element.childNodes[0];
        console.log("removing color");
        element.classList.remove(name);
      }

      function w3AddClass(element, name) {
        console.log("add w3 class");
        var i, arr1, arr2;
        var el = element.parentNode;
        arr1 = el.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {el.className += " " + arr2[i];}
        }
      }

      function w3RemoveClass(element, name) {
        console.log("remove w3 class");
        var i, arr1, arr2;
        var el = element.parentNode;
        arr1 = el.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
          }
        }
        el.className = arr1.join(" ");
      }
// END FILTER FUNCTIONALITY
