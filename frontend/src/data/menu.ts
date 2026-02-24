import type { MenuItem } from '../types';

// Меню ресторана Stephania — итальянская и кавказская кухня
// Структура по категориям как на сайте stephania.rest
export const menuData: MenuItem[] = [
  // Холодные закуски
  { id: 1, category: 'Холодные закуски', name: 'Брускетта с томатами и моцареллой', description: 'Поджаренный хлеб с сочными томатами, моцареллой и базиликом', weight: '180 г', price: 350, image: 'https://placehold.co/400x300/252525/c4a265?text=Брускетта' },
  { id: 2, category: 'Холодные закуски', name: 'Сырная тарелка', description: 'Ассорти итальянских сыров с грушей и орехами', weight: '250 г', price: 890, image: 'https://placehold.co/400x300/252525/c4a265?text=Сырная+тарелка' },
  { id: 3, category: 'Холодные закуски', name: 'Карпаччо из говядины', description: 'Тонко нарезанная говядина с рукколой и пармезаном', weight: '150 г', price: 650, image: 'https://placehold.co/400x300/252525/c4a265?text=Карпаччо' },
  { id: 4, category: 'Холодные закуски', name: 'Тартар из лосося', description: 'Свежий лосось с авокадо и соусом из цитрусов', weight: '180 г', price: 720, image: 'https://placehold.co/400x300/252525/c4a265?text=Тартар' },
  { id: 5, category: 'Холодные закуски', name: 'Овощное ассорти с хумусом', description: 'Сезонные овощи с домашним хумусом и питой', weight: '300 г', price: 420, image: 'https://placehold.co/400x300/252525/c4a265?text=Овощи' },
  { id: 6, category: 'Холодные закуски', name: 'Пармская ветчина с дыней', description: 'Классическое итальянское сочетание', weight: '150 г', price: 580, image: 'https://placehold.co/400x300/252525/c4a265?text=Парма' },

  // Горячие закуски
  { id: 7, category: 'Горячие закуски', name: 'Кальмары в кляре', description: 'Нежные кальмары в хрустящем кляре с соусом айоли', weight: '250 г', price: 520, image: 'https://placehold.co/400x300/252525/c4a265?text=Кальмары' },
  { id: 8, category: 'Горячие закуски', name: 'Креветки гриль в чесночном соусе', description: 'Тигровые креветки с чесноком и белым вином', weight: '220 г', price: 780, image: 'https://placehold.co/400x300/252525/c4a265?text=Креветки' },
  { id: 9, category: 'Горячие закуски', name: 'Мидии в белом вине', description: 'Мидии в соусе из белого вина, чеснока и зелени', weight: '350 г', price: 650, image: 'https://placehold.co/400x300/252525/c4a265?text=Мидии' },
  { id: 10, category: 'Горячие закуски', name: 'Сырники с сметаной', description: 'Домашние сырники с нежной сметаной', weight: '200 г', price: 320, image: 'https://placehold.co/400x300/252525/c4a265?text=Сырники' },
  { id: 11, category: 'Горячие закуски', name: 'Хачапури по-аджарски', description: 'Лодочка из теста с сыром и яйцом', weight: '350 г', price: 450, image: 'https://placehold.co/400x300/252525/c4a265?text=Хачапури' },

  // Салаты
  { id: 12, category: 'Салаты', name: 'Цезарь с курицей', description: 'Романо, пармезан, крутоны, соус цезарь, куриное филе гриль', weight: '320 г', price: 550, image: 'https://placehold.co/400x300/252525/c4a265?text=Цезарь' },
  { id: 13, category: 'Салаты', name: 'Цезарь с лососем', description: 'Классический цезарь с малосольным лососем', weight: '300 г', price: 680, image: 'https://placehold.co/400x300/252525/c4a265?text=Цезарь+лосось' },
  { id: 14, category: 'Салаты', name: 'Греческий салат', description: 'Томаты, огурцы, перец, оливки, фета, орегано', weight: '300 г', price: 420, image: 'https://placehold.co/400x300/252525/c4a265?text=Греческий' },
  { id: 15, category: 'Салаты', name: 'Салат с рукколой и пармезаном', description: 'Руккола, пармезан, вяленые томаты, кедровые орешки', weight: '250 г', price: 450, image: 'https://placehold.co/400x300/252525/c4a265?text=Руккола' },
  { id: 16, category: 'Салаты', name: 'Оливье классический', description: 'Домашний оливье по традиционному рецепту', weight: '280 г', price: 380, image: 'https://placehold.co/400x300/252525/c4a265?text=Оливье' },
  { id: 17, category: 'Салаты', name: 'Салат с тунцом', description: 'Тунец, авокадо, томаты черри, кунжут', weight: '280 г', price: 590, image: 'https://placehold.co/400x300/252525/c4a265?text=Тунец' },

  // Супы
  { id: 18, category: 'Супы', name: 'Том Ям', description: 'Острый тайский суп с креветками, грибами и лемонграссом', weight: '350 мл', price: 450, image: 'https://placehold.co/400x300/252525/c4a265?text=Том+Ям' },
  { id: 19, category: 'Супы', name: 'Суп-пюре из тыквы', description: 'Кремовый суп с гренками и семечками', weight: '300 мл', price: 350, image: 'https://placehold.co/400x300/252525/c4a265?text=Тыквенный' },
  { id: 20, category: 'Супы', name: 'Минестроне', description: 'Итальянский овощной суп с пастой и базиликом', weight: '350 мл', price: 380, image: 'https://placehold.co/400x300/252525/c4a265?text=Минестроне' },
  { id: 21, category: 'Супы', name: 'Харчо по-грузински', description: 'Острый суп из говядины с грецкими орехами и ткемали', weight: '400 мл', price: 420, image: 'https://placehold.co/400x300/252525/c4a265?text=Харчо' },
  { id: 22, category: 'Супы', name: 'Солянка мясная', description: 'Густой суп с колбасами, солёными огурцами и сметаной', weight: '400 мл', price: 420, image: 'https://placehold.co/400x300/252525/c4a265?text=Солянка' },
  { id: 23, category: 'Супы', name: 'Крем-суп из шампиньонов', description: 'Нежный грибной крем-суп с трюфельным маслом', weight: '300 мл', price: 390, image: 'https://placehold.co/400x300/252525/c4a265?text=Грибной' },

  // Горячее
  { id: 24, category: 'Горячее', name: 'Стейк Рибай', description: 'Мраморная говядина 250 г, овощи гриль, соус пеппер', weight: '350 г', price: 1890, image: 'https://placehold.co/400x300/252525/c4a265?text=Рибай' },
  { id: 25, category: 'Горячее', name: 'Стейк Филе Миньон', description: 'Нежнейшая вырезка 200 г с соусом Демигляс', weight: '280 г', price: 1650, image: 'https://placehold.co/400x300/252525/c4a265?text=Филе' },
  { id: 26, category: 'Горячее', name: 'Шашлык из свинины', description: 'Маринованная свинина на гриле с аджикой', weight: '350 г', price: 650, image: 'https://placehold.co/400x300/252525/c4a265?text=Шашлык' },
  { id: 27, category: 'Горячее', name: 'Шашлык из курицы', description: 'Куриное филе в специях на гриле', weight: '320 г', price: 520, image: 'https://placehold.co/400x300/252525/c4a265?text=Курица' },
  { id: 28, category: 'Горячее', name: 'Люля-кебаб из баранины', description: 'Нежная рубленая баранина с пряностями', weight: '300 г', price: 580, image: 'https://placehold.co/400x300/252525/c4a265?text=Люля' },
  { id: 29, category: 'Горячее', name: 'Паста Карбонара', description: 'Спагетти, бекон, яйцо, пармезан, перец', weight: '350 г', price: 520, image: 'https://placehold.co/400x300/252525/c4a265?text=Карбонара' },
  { id: 30, category: 'Горячее', name: 'Паста Болоньезе', description: 'Спагетти с мясным соусом и пармезаном', weight: '350 г', price: 480, image: 'https://placehold.co/400x300/252525/c4a265?text=Болоньезе' },
  { id: 31, category: 'Горячее', name: 'Ризотто с грибами', description: 'Кремовое ризотто с белыми грибами и трюфельным маслом', weight: '320 г', price: 550, image: 'https://placehold.co/400x300/252525/c4a265?text=Ризотто' },
  { id: 32, category: 'Горячее', name: 'Лосось на гриле', description: 'Филе лосося с овощами и лимонным соусом', weight: '280 г', price: 890, image: 'https://placehold.co/400x300/252525/c4a265?text=Лосось' },
  { id: 33, category: 'Горячее', name: 'Плов узбекский', description: 'Баранина, рис, морковь, зира, барбарис', weight: '400 г', price: 520, image: 'https://placehold.co/400x300/252525/c4a265?text=Плов' },

  // Гарниры
  { id: 34, category: 'Гарниры', name: 'Картофель фри', description: 'Хрустящий картофель с соусом', weight: '200 г', price: 220, image: 'https://placehold.co/400x300/252525/c4a265?text=Фри' },
  { id: 35, category: 'Гарниры', name: 'Картофель молодой с зеленью', description: 'Отварной молодой картофель с маслом и укропом', weight: '200 г', price: 180, image: 'https://placehold.co/400x300/252525/c4a265?text=Картофель' },
  { id: 36, category: 'Гарниры', name: 'Овощи гриль', description: 'Кабачок, баклажан, перец, томаты', weight: '200 г', price: 280, image: 'https://placehold.co/400x300/252525/c4a265?text=Овощи+гриль' },
  { id: 37, category: 'Гарниры', name: 'Рис отварной', description: 'Рис басмати с маслом', weight: '150 г', price: 120, image: 'https://placehold.co/400x300/252525/c4a265?text=Рис' },
  { id: 38, category: 'Гарниры', name: 'Гречка с луком', description: 'Гречневая каша с жареным луком', weight: '200 г', price: 150, image: 'https://placehold.co/400x300/252525/c4a265?text=Гречка' },

  // Десерты
  { id: 39, category: 'Десерты', name: 'Тирамису', description: 'Классический итальянский десерт с маскарпоне', weight: '180 г', price: 420, image: 'https://placehold.co/400x300/252525/c4a265?text=Тирамису' },
  { id: 40, category: 'Десерты', name: 'Панна котта', description: 'Ванильная панна котта с ягодным соусом', weight: '150 г', price: 350, image: 'https://placehold.co/400x300/252525/c4a265?text=Панна+котта' },
  { id: 41, category: 'Десерты', name: 'Чизкейк Нью-Йорк', description: 'Классический чизкейк с ягодным топпингом', weight: '180 г', price: 420, image: 'https://placehold.co/400x300/252525/c4a265?text=Чизкейк' },
  { id: 42, category: 'Десерты', name: 'Павлава', description: 'Меренга с кремом и свежими ягодами', weight: '200 г', price: 380, image: 'https://placehold.co/400x300/252525/c4a265?text=Павлава' },
  { id: 43, category: 'Десерты', name: 'Мороженое', description: 'Шарик ванильного мороженого', weight: '100 г', price: 150, image: 'https://placehold.co/400x300/252525/c4a265?text=Мороженое' },
  { id: 44, category: 'Десерты', name: 'Чурчхела', description: 'Традиционная грузинская сладость с орехами', weight: '100 г', price: 250, image: 'https://placehold.co/400x300/252525/c4a265?text=Чурчхела' },

  // Напитки
  { id: 45, category: 'Напитки', name: 'Эспрессо', description: 'Классический эспрессо', weight: '50 мл', price: 150, image: 'https://placehold.co/400x300/252525/c4a265?text=Эспрессо' },
  { id: 46, category: 'Напитки', name: 'Американо', description: 'Двойной эспрессо с горячей водой', weight: '200 мл', price: 180, image: 'https://placehold.co/400x300/252525/c4a265?text=Американо' },
  { id: 47, category: 'Напитки', name: 'Капучино', description: 'Эспрессо с молочной пенкой', weight: '200 мл', price: 220, image: 'https://placehold.co/400x300/252525/c4a265?text=Капучино' },
  { id: 48, category: 'Напитки', name: 'Латте', description: 'Эспрессо с молоком', weight: '250 мл', price: 250, image: 'https://placehold.co/400x300/252525/c4a265?text=Латте' },
  { id: 49, category: 'Напитки', name: 'Свежевыжатый апельсиновый сок', description: '100% апельсиновый сок', weight: '300 мл', price: 320, image: 'https://placehold.co/400x300/252525/c4a265?text=Сок' },
  { id: 50, category: 'Напитки', name: 'Лимонад домашний', description: 'Свежий лимонад с мятой', weight: '400 мл', price: 280, image: 'https://placehold.co/400x300/252525/c4a265?text=Лимонад' },
  { id: 51, category: 'Напитки', name: 'Морс клюквенный', description: 'Домашний клюквенный морс', weight: '400 мл', price: 220, image: 'https://placehold.co/400x300/252525/c4a265?text=Морс' },
  { id: 52, category: 'Напитки', name: 'Минеральная вода', description: 'Боржоми / Ессентуки / Стелмас', weight: '330 мл', price: 150, image: 'https://placehold.co/400x300/252525/c4a265?text=Вода' },

  // Бар
  { id: 53, category: 'Бар', name: 'Красное вино бокал', description: 'Испанское/итальянское красное вино', weight: '150 мл', price: 350, image: 'https://placehold.co/400x300/252525/c4a265?text=Вино+красное' },
  { id: 54, category: 'Бар', name: 'Белое вино бокал', description: 'Шардоне или Пино Гриджио', weight: '150 мл', price: 350, image: 'https://placehold.co/400x300/252525/c4a265?text=Вино+белое' },
  { id: 55, category: 'Бар', name: 'Шампанское бокал', description: 'Игристое вино Просекко', weight: '150 мл', price: 450, image: 'https://placehold.co/400x300/252525/c4a265?text=Шампанское' },
  { id: 56, category: 'Бар', name: 'Пиво разливное', description: 'Светлое/тёмное по выбору', weight: '500 мл', price: 280, image: 'https://placehold.co/400x300/252525/c4a265?text=Пиво' },
  { id: 57, category: 'Бар', name: 'Кола / Фанта / Спрайт', description: 'Прохладительные напитки', weight: '330 мл', price: 120, image: 'https://placehold.co/400x300/252525/c4a265?text=Cola' },
  { id: 58, category: 'Бар', name: 'Чай чайник', description: 'Чёрный, зелёный, травяной на выбор', weight: '500 мл', price: 250, image: 'https://placehold.co/400x300/252525/c4a265?text=Чай' },
  { id: 59, category: 'Бар', name: 'Чача', description: 'Грузинская виноградная водка', weight: '50 мл', price: 350, image: 'https://placehold.co/400x300/252525/c4a265?text=Чача' },
  { id: 60, category: 'Бар', name: 'Коньяк армянский', description: 'Марочный армянский коньяк', weight: '50 мл', price: 450, image: 'https://placehold.co/400x300/252525/c4a265?text=Коньяк' },
];

export const categories = Array.from(new Set(menuData.map((item) => item.category)));
