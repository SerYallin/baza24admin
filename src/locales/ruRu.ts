export const ruRu = {
  actions: {
    new: 'Создать',
    edit: 'Редактировать',
    show: 'Просмотр',
    delete: 'Удалить',
    bulkDelete: 'Удалить выбранные',
    list: 'Список',
  },
  buttons: {
    save: 'Сохранить',
    addNewItem: 'Добавить',
    filter: 'Фильтр',
    filterActive: 'Фильтры ({{count}})',
    applyChanges: 'Применить',
    resetFilter: 'Сбросить фильтр',
    confirmRemovalMany: 'Подтвердить удаление {{count}} записей',
    confirmRemovalMany_plural: 'Подтвердить удаление {{count}} записей',
    logout: 'Выйти',
    login: 'Войти',
    seeTheDocumentation: 'Смотреть: <1>документацию</1>',
    createFirstRecord: 'Создать первую запись',
    cancel: 'Отмена',
    confirm: 'Подтвердить',
    contactUs: 'Связаться с нами',
    register: 'Создать аккаунт',
  },
  components: {
    DropZone: {
      placeholder: 'Переместите файлы сюда или нажмите для выбора',
      acceptedSize: 'Максимальный размер: {{maxSize}}',
      acceptedType: 'Поддерживает: {{mimeTypes}}',
      unsupportedSize:
        'Файл {{fileName}} имеет слишком большой размер: {{fileSize}}',
      unsupportedType: 'Файл {{fileName}} имеет недопустимый тип: {{mimeType}}',
    },
    LanguageSelector: {
      availableLanguages: {
        de: 'Немецкий',
        en: 'Английский',
        es: 'Испанский',
        it: 'Итальянский',
        ja: 'Японский',
        pl: 'Польский',
        'pt-BR': 'Португальский (Бразильский)',
        ua: 'Укранский',
        'zh-CN': 'Китайский (Китай)',
        ru: 'Русский',
      },
    },
    Login: {
      welcomeHeader: 'Добро пожаловать',
      welcomeMessage: 'База 24. В вашей жизни всегда должны быть свежие цветы.',
      properties: {
        email: 'Логин',
        password: 'Пароль',
      },
      loginButton: 'Войти',
    },
  },
  labels: {
    navigation: 'Навигация',
    pages: 'Страницы',
    selectedRecords: 'Выбрать ({{selected}})',
    filters: 'Фильтры',
    adminVersion: 'Версия админки: {{version}}',
    appVersion: 'Версия приложения: {{version}}',
    dashboard: 'Панель управления',
    Administration: 'Администрирование',
    users: 'Пользователи',
    roles: 'Роли',
  },
  properties: {
    length: 'Длина',
    from: 'От',
    to: 'До',
  },
  resources: {
    users: {
      properties: {
        id: 'ID',
        name: 'Имя',
        email: 'Email',
        password: 'Пароль',
        role: 'Роль',
        createdAt: 'Создано',
        updatedAt: 'Обновлено',
      },
    },
    roles: {
      properties: {
        id: 'ID',
        name: 'Имя',
        slug: 'Ключ',
      },
    },
  },
  messages: {
    successfullyBulkDeleted: 'Успешно удалено {{count}} записей',
    successfullyBulkDeleted_plural: 'Успешно удалено {{count}} записей',
    successfullyDeleted: 'Запись успешно удалена',
    successfullyUpdated: 'Запись успешно обновлена',
    thereWereValidationErrors: 'Ошибка валидации. Проверьте поля ниже',
    forbiddenError:
      'Вы не можете выполнить действие {{actionName}} с {{resourceId}}',
    anyForbiddenError: 'Вы не можете выполнить данное действие',
    successfullyCreated: 'Успешно создана новая запись',
    bulkDeleteError:
      'При удалении записей произошла ошибка. Проверьте консоль для более подробной информации',
    errorFetchingRecords:
      'При получении записей произошла ошибка. Проверьте консоль для более подробной информации',
    errorFetchingRecord:
      'При получении записи произошла ошибка. Проверьте консоль для более подробной информации',
    noRecordsSelected: 'У вас нет выбранных записей',
    theseRecordsWillBeRemoved: 'Следующие записи будут удалены',
    theseRecordsWillBeRemoved_plural: 'Следующие записи будут удалены',
    pickSomeFirstToRemove: 'Выберите записи, которые хотите удалить',
    error404Resource:
      'Ресурса с id: {{resourceId}} не существует или вы не можете использовать его',
    error404Action:
      'Ресурса с id: {{resourceId}} не имеет действия с именем: {{actionName}} или вы не можете использовать его',
    error404Record:
      'Ресурса с id: {{resourceId}} не имеет записи с id: {{recordId}} или вы не можете использовать его',
    seeConsoleForMore:
      'Проверьте консоль разработчика для более подробной информации...',
    noActionComponent: 'Вы не реализовали компонент для вашего действия',
    noRecordsInResource: 'В этом ресурсе нет записей',
    noRecords: 'Нет записей',
    confirmDelete: 'Вы действительно хотите удалить этот элемент?',
    welcomeOnBoard_title: 'Добро пожаловать на доску!',
    welcomeOnBoard_subtitle:
      'Теперь вы один из нас! Мы приготовили для вас несколько простых подсказок, чтобы начать пользоваться админкой',
    addingResources_title: 'Добавление ресурсов',
    addingResources_subtitle: 'Изучить как добавить ресурсы',
    customizeResources_title: 'Изменить ресурсы',
    customizeResources_subtitle: 'Определить поведение свойств и другого...',
    customizeActions_title: 'Изменить действия',
    customizeActions_subtitle:
      'Изменить существующие действия или добавить новые',
    writeOwnComponents_title: 'Написать кастомные компоненты',
    writeOwnComponents_subtitle: 'Как изменить Look & Feel в админке',
    customDashboard_title: 'Пользовательская панель управления',
    customDashboard_subtitle: 'Изучить как изменить экран админ панели',
    roleBasedAccess_title: 'Доступ по ролям',
    roleBasedAccess_subtitle: 'Добавить доступы по ролям для пользователей',
    community_title: 'Вступить в Discord сообщество',
    community_subtitle:
      'Связаться с создателем AdminJs панели или с разработчиком AdminJs',
    foundBug_title: 'Нашел баг? Нужно исправить?',
    foundBug_subtitle: 'Создайте проблему в нашем репозитории на GitHub',
    needMoreSolutions_title: 'Нужно расширенное решение?',
    needMoreSolutions_subtitle:
      'Мы здесь для того, чтобы предоставить вам красивый дизайн UX / UI и индивидуальное программное обеспечение, основанное (не только) на AdminJS',
    invalidCredentials: 'Неверный логин или пароль',
    keyPlaceholder: 'KEY',
    valuePlaceholder: 'VALUE',
    initialKey: 'Key-{{number}}',
    keyInUse: 'Ключ объекта должен быть уникальным',
    keyValuePropertyDefaultDescription:
      'Все значения записываются как текстовые. Ключи должны быть уникальные, дубликаты ключей не будут сохранены.',
    pageNotFound_title: 'Страница не найдена',
    pageNotFound_subtitle:
      'Страница <strong>"{{pageName}}"</strong> не существует',
    componentNotFound_title: 'Не указан компонент',
    componentNotFound_subtitle:
      'Нужно указать компонент который будит отображать ваш элемент',
    registrationLinkMessage:
      'Если нету аккаунта, то можете зарегистрироваться: ',
  },
};
