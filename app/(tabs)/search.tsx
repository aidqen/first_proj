const Search = () => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: loadMovies,
    reset
  } = useFetch(() => fetchMovies(
    { query: searchQuery }
  ), false)

  useEffect(() => {
  return (
    <View>
      <Text>search</Text>
    </View>
  )
}

export default Search